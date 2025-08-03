import { useQueryUser } from '@/hooks/use-queries';

type Props = {
  type: 'FREE' | 'PRO';
  children: React.ReactNode;
};

export const SubscriptionPlan = ({ type, children }: Props) => {
  const { data } = useQueryUser();

  return data?.data?.subscription?.plan === type && children;
};
