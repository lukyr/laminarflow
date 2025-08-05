import { client } from '@/lib/prisma';

export const matchKeyword = async (keyword: string) => {
  return await client.keyword.findFirst({
    where: {
      word: {
        equals: keyword,
        mode: 'insensitive',
      },
    },
  });
};

export const getKeywordAutomation = async (automationId: string, dm: boolean) => {
  return await client.automation.findUnique({
    where: {
      id: automationId,
    },
    include: {
      dms: dm,
      trigger: {
        where: {
          type: dm ? 'DM' : 'COMMENT',
        },
      },
      listener: true,
      User: {
        select: {
          subscription: {
            select: {
              plan: true,
            },
          },
          integrations: {
            select: {
              token: true,
            },
          },
        },
      },
    },
  });
};

export const trackResponses = async (automationId: string, type: 'DM' | 'COMMENT') => {
  if (type === 'COMMENT') {
    return await client.listener.update({
      where: { automationId },
      data: {
        commentCount: {
          increment: 1,
        },
      },
    });
  }

  if (type === 'DM') {
    return await client.listener.update({
      where: { automationId },
      data: {
        dmCount: {
          increment: 1,
        },
      },
    });
  }
};

export const getKeywordPost = async (postId: string, automationId: string) => {
  return await client.post.findFirst({
    where: {
      AND: [{ postId: postId }, { automationId: automationId }],
    },
    select: { automationId: true },
  });
};

export const getChatHistory = async (sender: string, receiver: string) => {
  try {
    const messages = await client.dms.findMany({
      where: {
        OR: [
          {
            AND: [{ senderId: sender }, { receiver: receiver }],
          },
          {
            AND: [{ senderId: receiver }, { receiver: sender }],
          },
        ],
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    const latestMessageWithAutomation = messages
      .slice()
      .reverse()
      .find((msg) => msg.automationId !== null);

    const formattedHistory = messages
      .filter((msg) => msg.message && msg.message.trim() !== '')
      .map((msg) => ({
        role: msg.senderId === sender ? 'user' : ('assistant' as 'user' | 'assistant'),
        content: msg.message!,
      }));

    return {
      history: formattedHistory,
      automationId: latestMessageWithAutomation?.automationId || null,
      count: formattedHistory.length,
      success: true,
    };
  } catch (error) {
    console.error('Error fetching chat history:', error);
    return {
      history: [],
      automationId: null,
      count: 0,
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

export const createChatHistory = (
  automationId: string,
  sender: string,
  receiver: string,
  message: string
) => {
  return client.automation.update({
    where: {
      id: automationId,
    },
    data: {
      dms: {
        create: {
          senderId: sender,
          receiver: receiver,
          message,
        },
      },
    },
  });
};
