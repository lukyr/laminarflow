import { findAutomation } from '@/actions/automations/queries';
import {
  createChatHistory,
  getChatHistory,
  getKeywordAutomation,
  getKeywordPost,
  matchKeyword,
  trackResponses,
} from '@/actions/webhook/queries';
import { sendDM } from '@/lib/fetch';
import { client } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: NextRequest) {
  const hub = req.nextUrl.searchParams.get('hub.challenge');

  return new NextResponse(hub);
}

export async function POST(req: NextRequest) {
  const webhook_payload = await req.json();
  console.log(webhook_payload);
  let matcher;

  try {
    if (webhook_payload.entry[0].messaging) {
      matcher = await matchKeyword(webhook_payload.entry[0].messaging[0].message.text);
    }

    if (webhook_payload.entry[0].changes) {
      matcher = await matchKeyword(webhook_payload.entry[0].changes[0].value.text);
    }

    if (matcher && matcher.automationId) {
      // we have a keyword matcher
      if (webhook_payload.entry[0].messaging) {
        // we have a messaging payload
        const automation = await getKeywordAutomation(matcher.automationId, true);

        if (automation && automation.trigger) {
          if (automation.listener && automation.listener.listener === 'MESSAGE') {
            const direct_message = await sendDM(
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              automation.listener?.prompt,
              automation.User?.integrations[0].token!
            );

            if (direct_message.status === 200) {
              const tracked = await trackResponses(matcher.automationId, 'DM');
              if (tracked) {
                return NextResponse.json({
                  message: 'Message Sent',
                  status: 200,
                });
              }
            }
          }

          if (
            automation.listener &&
            automation.listener.listener === 'SMARTAI' &&
            automation.User?.subscription?.plan === 'PRO'
          ) {
            const smart_ai_message = await openai.chat.completions.create({
              model: 'gpt-4o',
              messages: [
                {
                  role: 'assistant',
                  content: `${automation.listener.prompt}: Keep response under 2 sentences`,
                },
              ],
            });

            if (smart_ai_message.choices[0].message.content) {
              const receiver = createChatHistory(
                automation.id,
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].messaging[0].sender.id,
                webhook_payload.entry[0].messaging[0].message.text
              );

              const sender = createChatHistory(
                automation.id,
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].messaging[0].sender.id,
                smart_ai_message.choices[0].message.content
              );

              await client.$transaction([receiver, sender]);

              const direct_message = await sendDM(
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].messaging[0].sender.id,
                smart_ai_message.choices[0].message.content,
                automation.User?.integrations[0].token!
              );

              if (direct_message.status === 200) {
                const tracked = await trackResponses(automation.id, 'DM');
                if (tracked) {
                  return NextResponse.json({
                    message: 'Message Sent',
                    status: 200,
                  });
                }
              }
            }
          }
        }
      }

      if (
        webhook_payload.entry[0].changes &&
        webhook_payload.entry[0].changes[0].field === 'comments'
      ) {
        const automation = await getKeywordAutomation(matcher.automationId, false);

        const automations_post = await getKeywordPost(
          webhook_payload.entry[0].changes[0].value.media.id,
          automation?.id!
        );

        if (automation && automations_post && automation.trigger) {
          if (automation.listener) {
            if (automation.listener.listener === 'MESSAGE') {
              const direct_message = await sendDM(
                webhook_payload.entry[0].id,
                webhook_payload.entry[0].changes[0].value.from.id,
                automation.listener?.prompt,
                automation.User?.integrations[0].token!
              );

              if (direct_message.status === 200) {
                const tracked = await trackResponses(automation.id, 'COMMENT');
                if (tracked) {
                  return NextResponse.json({
                    message: 'Message Sent',
                    status: 200,
                  });
                }
              }
            }

            if (
              automation.listener.listener === 'SMARTAI' &&
              automation.User?.subscription?.plan === 'PRO'
            ) {
              const smart_ai_message = await openai.chat.completions.create({
                model: 'gpt-4o',
                messages: [
                  {
                    role: 'assistant',
                    content: `${automation.listener.prompt}: Keep response under 2 sentences`,
                  },
                ],
              });

              if (smart_ai_message.choices[0].message.content) {
                const receiver = createChatHistory(
                  automation.id,
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].changes[0].value.from.id,
                  webhook_payload.entry[0].changes[0].value.text
                );

                const sender = createChatHistory(
                  automation.id,
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].changes[0].value.from.id,
                  smart_ai_message.choices[0].message.content
                );

                await client.$transaction([receiver, sender]);

                const direct_message = await sendDM(
                  webhook_payload.entry[0].id,
                  webhook_payload.entry[0].changes[0].value.from.id,
                  smart_ai_message.choices[0].message.content,
                  automation.User?.integrations[0].token!
                );

                if (direct_message.status === 200) {
                  const tracked = await trackResponses(automation.id, 'COMMENT');
                  if (tracked) {
                    return NextResponse.json({
                      message: 'Message Sent',
                      status: 200,
                    });
                  }
                }
              }
            }
          }
        }
      }
    }

    if (!matcher) {
      const customer_history = await getChatHistory(
        webhook_payload.entry[0].messaging[0].recipient.id,
        webhook_payload.entry[0].messaging[0].sender.id
      );

      if (customer_history.history.length > 0) {
        const automation = await findAutomation(customer_history.automationId!);

        if (
          automation?.User?.subscription?.plan === 'PRO' &&
          automation.listener?.listener === 'SMARTAI'
        ) {
          const smart_ai_message = await openai.chat.completions.create({
            model: 'gpt-4o',
            messages: [
              {
                role: 'assistant',
                content: `${automation.listener.prompt}: Keep response under 2 sentences`,
              },
              ...customer_history.history,
              {
                role: 'user',
                content: webhook_payload.entry[0].messaging[0].message.text,
              },
            ],
          });

          if (smart_ai_message.choices[0].message.content) {
            const receiver = createChatHistory(
              automation.id,
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              webhook_payload.entry[0].messaging[0].message.text
            );

            const sender = createChatHistory(
              automation.id,
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              smart_ai_message.choices[0].message.content
            );

            await client.$transaction([receiver, sender]);

            const direct_message = await sendDM(
              webhook_payload.entry[0].id,
              webhook_payload.entry[0].messaging[0].sender.id,
              smart_ai_message.choices[0].message.content,
              automation.User?.integrations[0].token!
            );

            if (direct_message.status === 200) {
              return NextResponse.json({
                message: 'Message Sent',
                status: 200,
              });
            }
          }
        }
      }
    }

    return NextResponse.json({
      message: 'OK',
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: 'OK',
      status: 200,
    });
  }
}
