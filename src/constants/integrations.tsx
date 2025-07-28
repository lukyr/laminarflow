import { LogoInstagram } from '@/svgs/logo-instagram';
import { Sparkles } from 'lucide-react';
import React from 'react';

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: 'INSTAGRAM' | 'CRM';
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: 'Connect Instagram',
    description: 'Connect your Instagram account to start automating your DMs and comments',
    icon: <LogoInstagram />,
    strategy: 'INSTAGRAM',
  },
  {
    title: 'Connect Salesforce',
    description: 'Connect your Salesforce account to start automating your DMs and comments',
    icon: <Sparkles />,
    strategy: 'CRM',
  },
];
