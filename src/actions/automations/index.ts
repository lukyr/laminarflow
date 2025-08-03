'use server';

import { on } from 'events';
import { onCurrentUser } from '../user';
import {
  addKeyword,
  addListener,
  addPost,
  addTrigger,
  createAutomation,
  deleteKeywordQuery,
  findAutomation,
  getAutomations,
  updateAutomation,
} from './queries';
import { findUser } from '../user/queries';

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();
  try {
    const create = await createAutomation(user.id, id);
    if (create) return { status: 200, data: 'Automation created' };
    return { status: 404, data: 'Oops! something went wrong' };
  } catch (error) {
    return { status: 500, data: 'Internal server error' };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();
  try {
    const automations = await getAutomations(user.id);
    if (automations) return { status: 200, data: automations.automations };
    return { status: 404, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();

  try {
    const automation = await findAutomation(id);
    if (automation) return { status: 200, data: automation };
    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();
  try {
    const update = await updateAutomation(automationId, data);
    if (update) {
      return { status: 200, data: 'Automation successfully updated' };
    }
    return { status: 404, data: 'Oops! could not find the automation' };
  } catch (error) {
    return { status: 500, data: 'Internal server error' };
  }
};

export const saveListener = async (
  automationId: string,
  listener: 'SMARTAI' | 'MESSAGE',
  prompt: string,
  reply?: string
) => {
  await onCurrentUser();
  try {
    const create = await addListener(automationId, listener, prompt, reply);
    if (create) return { status: 200, data: 'Listener added' };
    return { status: 404, data: 'Cant add listener' };
  } catch (error) {
    return { status: 500, data: 'Internal server error' };
  }
};

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser();
  try {
    const create = await addTrigger(automationId, trigger);
    if (create) return { status: 200, data: 'Trigger added' };
    return { status: 404, data: 'Cant add trigger' };
  } catch (error) {
    return { status: 500, data: 'Internal server error' };
  }
};

export const saveKeyword = async (automationId: string, keyword: string) => {
  await onCurrentUser();
  try {
    const create = await addKeyword(automationId, keyword);
    if (create) return { status: 200, data: 'Keyword added' };
    return { status: 404, data: 'Cant add keyword' };
  } catch (error) {
    return { status: 500, data: 'Internal server error' };
  }
};

export const deleteKeyword = async (id: string) => {
  await onCurrentUser();
  try {
    const deleted = await deleteKeywordQuery(id);
    if (deleted) return { status: 200, data: 'Keyword deleted' };
    return { status: 404, data: 'Cant delete keyword' };
  } catch (error) {
    return { status: 500, data: 'Internal server error' };
  }
};

export const getProfilePosts = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);
    const posts = await fetch(
      `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile?.integrations[0].token}`
    );

    const parsed = await posts.json();
    if (parsed) return { status: 200, data: parsed };
    console.log('Error getting posts');
    return { status: 400 };
  } catch (error) {
    console.log('server side error in getting posts', error);
    return { status: 500 };
  }
};

export const savePosts = async (
  automationId: string,
  posts: {
    postId: string;
    caption?: string;
    media: string;
    mediaType: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  }[]
) => {
  await onCurrentUser();
  try {
    const create = await addPost(automationId, posts);
    if (create) return { status: 200, data: 'Posts added' };
    return { status: 404, data: 'Cant add posts' };
  } catch (error) {
    return { status: 500, data: 'Internal server error' };
  }
};
