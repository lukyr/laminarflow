'use client';
import { usePaths } from '@/hooks/user-nav';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';
import GradientButton from '../gradient-button';
import { Button } from '@/components/ui/button';

type Props = {};

const AutomationList = (props: Props) => {
  //WIP: get the automations from the database

  const { pathname } = usePaths();

  //WIP: If no automations exist show no automations
  return (
    <div className="flex flex-col gap-y-3">
      <Link
        className="radial--gradient-automations flex rounded-xl border-[1px] border-[#545454] bg-[#1D1D1D] p-5 transition duration-100 hover:opacity-80"
        href={`${pathname}/12345`}
      >
        <div className="flex flex-1 flex-col items-start">
          <h2 className="text-xl font-semibold">Automation Name</h2>
          <p className="text=[#9B9CA0] mb-2 text-sm font-light">This is from comment</p>
          {/* WIP: AUtomation Keywords */}
          <div className="mt-3 flex flex-wrap gap-x-2">
            <div
              className={cn(
                'rounded-full px-4 py-1 capitalize',
                (0 + 1) % 1 == 0 && 'border-2 border-keyword-green bg-keyword-green/15',
                (1 + 1) % 2 == 0 && 'border-2 border-keyword-purple bg-keyword-purple/15',
                (2 + 1) % 3 == 0 && 'border-2 border-keyword-yellow bg-keyword-yellow/15',
                (3 + 1) % 4 == 0 && 'border-2 border-keyword-red bg-keyword-red/15'
              )}
            >
              Get Started
            </div>
          </div>
          <div className="mt-3 rounded-full border-2 border-dashed border-white/60 px-3 py-1">
            <p className="text-sm text-[#bfc0c3]">No Keyword</p>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <p className="text-sm capitalize text-[#9B9CA0]">Aug 28th 2025</p>

          {/* WIP: Render the button baesd on the listener */}
          <GradientButton
            type="BUTTON"
            className="w-full bg-background-88 text-white hover:bg-background-88"
          >
            Smart AI
          </GradientButton>
          <Button className="bg-background-88 text-white hover:bg-background-88">Standard</Button>
        </div>
      </Link>
    </div>
  );
};

export default AutomationList;
