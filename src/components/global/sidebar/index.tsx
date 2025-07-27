'use client';

import { usePaths } from '@/hooks/user-nav';
import LogoSmall from '@/svgs/logo-small';
import React from 'react';
import Items from './items';
import { Separator } from '@/components/ui/separator';
import ClerkAuthState from '../clerk-auth-state';
import { BadgeHelp } from 'lucide-react';
import { SubscriptionPlan } from '../subscription-plan';
import UpgradeCard from './upgrade';

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  return (
    <div className="radial-gradient lg-inline-block fixed bottom-0 left-0 top-0 m-3 hidden w-[250px] overflow-hidden rounded-3xl border-[1px] border-[#545454] bg-gradient-to-b from-[#768BDD] via-[#171717] to-[#768BDD]">
      <div className="background--blur__safari background-blur-3xl flex h-full w-full flex-col gap-y-5 bg-[#171717] bg-opacity-90 bg-clip-padding p-3 backdrop-filter">
        <div className="flex items-center justify-center gap-x-2 p-5">
          <LogoSmall />
        </div>
        <div className="flex flex-col py-3">
          <Items page={page} slug={slug} />
        </div>
        <div className="px-16">
          <Separator orientation="horizontal" className="bg-[#5C5C5F]" />
        </div>
        <div className="flex flex-col gap-y-5 px-3">
          <div className="flex gap-x-2">
            <ClerkAuthState />
            <p className="text-[#9B9CA0]">Profile</p>
          </div>
          <div className="flex gap-x-3">
            <BadgeHelp />
            <p className="text-[#9B9CA0]">Help</p>
          </div>
        </div>
        <SubscriptionPlan type="FREE">
          <div className="flex flex-1 flex-col justify-end">
            <UpgradeCard />
          </div>
        </SubscriptionPlan>
      </div>
    </div>
  );
};

export default Sidebar;
