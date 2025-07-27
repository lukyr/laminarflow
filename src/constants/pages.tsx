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
