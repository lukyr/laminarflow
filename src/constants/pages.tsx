import React from 'react';
import { FieldProps } from './menu';
import { Blocks, Contact, Home, Settings, Workflow } from 'lucide-react';
import { INTEGRATIONS } from '@/generated/prisma';

export const PAGE_BREAD_CRUMBS: string[] = ['contacts', 'automations', 'integrations', 'settings'];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICON: Props = {
  AUTOMATIONS: <Workflow />,
  CONTACTS: <Contact />,
  INTEGRATIONS: <Blocks />,
  SETTINGS: <Settings />,
  HOME: <Home />,
};

export const PLANS = [
  {
    name: 'Free',
    description: 'Perfect for getting started with Instagram automation',
    price: '$0',
    features: [
      'Boost engagement',
      'Automate comment replies to enhance audience interaction',
      'Turn followers into customers with targeted messaging',
    ],
    cta: 'Get Started Free',
  },
  {
    name: 'Smart AI Plan',
    description: 'Advanced features for power users',
    price: '$99',
    features: [
      'All features of the free plan',
      'AI-powered response generation',
      'Advanced Analytics and insights',
      'Priority customer support',
      'Custom branding options',
    ],
    cta: 'Upgrade Now',
  },
];
