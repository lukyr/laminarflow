import { v4 as uuid } from 'uuid';
import { Home, Workflow, User, Settings, Blocks } from 'lucide-react';

export type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: 'home',
    icon: <Home />,
  },
  {
    id: uuid(),
    label: 'automations',
    icon: <Workflow />,
  },
  {
    id: uuid(),
    label: 'integrations',
    icon: <Blocks />,
  },
  {
    id: uuid(),
    label: 'settings',
    icon: <Settings />,
  },
];
