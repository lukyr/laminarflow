import { getAllAutomations, getAutomationInfo } from '@/actions/automations';
import { onUserInfo } from '@/actions/user';
import { QueryClient, QueryFunction } from '@tanstack/react-query';

const prefetch = async (client: QueryClient, action: QueryFunction, key: string) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
};

export const PrefetchUserProfile = async (client: QueryClient) => {
  //WIP: Prefetch user profile data
  return await prefetch(client, onUserInfo, 'user-profile');
};

export const PrefetchUserAutomations = async (client: QueryClient) => {
  //WIP: Prefetch user automations
  return await prefetch(client, getAllAutomations, 'user-automations');
};

export const PrefetchUserAutomation = async (client: QueryClient, automationId: string) => {
  return await prefetch(client, () => getAutomationInfo(automationId), 'user-automation');
};
