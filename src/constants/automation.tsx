import { LogoInstagram } from '@/svgs/logo-instagram';
import { ArrowBigRightIcon, BotIcon } from 'lucide-react';
import { v4 } from 'uuid';

export type AutomationListenerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: 'SMARTAI' | 'MESSAGE';
};

export type AutomationTriggerProps = {
  id: string;
  label: string;
  icon: JSX.Element;
  description: string;
  type: 'COMMENT' | 'DM';
};

export const AUTOMATION_TRIGGERS: AutomationTriggerProps[] = [
  {
    id: v4(),
    label: 'User comments on my post',
    icon: <LogoInstagram />,
    description: 'Select if you want to automate comments on your post',
    type: 'COMMENT',
  },
  {
    id: v4(),
    label: 'User sends me a DM with a keyword',
    icon: <LogoInstagram />,
    description: 'Select if you want to automate direct messages on your profile',
    type: 'DM',
  },
];

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
  {
    id: v4(),
    label: 'Send the user a message',
    icon: <ArrowBigRightIcon />,
    description: 'Enter the message that you want to send the user',
    type: 'MESSAGE',
  },
  {
    id: v4(),
    label: 'Let Smart AI take over',
    icon: <BotIcon />,
    description: 'Tell AI about your project. (Upgrade to use this feature)',
    type: 'SMARTAI',
  },
];
