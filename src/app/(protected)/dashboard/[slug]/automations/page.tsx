import AutomationList from '@/components/global/automation-list';
import CreateAutomationButton from '@/components/global/create-automation-button';
import { Check } from 'lucide-react';
import React from 'react';

type Props = {};

const Page = (props: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-6">
      <div className="lg:col-span-4">
        <AutomationList />
      </div>
      <div className="lg:col-span-2">
        <div className="flex flex-col gap-y-6 overflow-hidden rounded-xl border-[1px] border-in-active bg-background-88 p-5">
          <div>
            <h2 className="text-xl">Automations</h2>
            <p className="text-text-secondary">Your live automations will show here.</p>
          </div>
          <div className="flex flex-col gap-y-3">
            {[1, 2, 3].map((item) => {
              return (
                <div key={item} className="flex items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="font-medium">Direct traffic towards website</h3>
                    <p className="text-sm text-text-secondary">October 5th 2024</p>
                  </div>
                  <Check />
                </div>
              );
            })}
            <CreateAutomationButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
