import { ChevronRight, EditIcon, PencilLineIcon } from 'lucide-react';
import React from 'react';

type Props = {};

const AutomationsBreadCrumb = (props: Props) => {
  // WIP: get the automation data
  return (
    <div className="flex w-full items-center justify-between rounded-full bg-[#18181B1A] p-5">
      <div className="flex items-center gap-x-3">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#5C75D6" />
        <span className="flex items-center gap-x-3">
          {/* WIP: Show the editing data */}
          <p className="text-[#9B9CA0]">This is the automation</p>
          <span className="transaction cursor-pointer duration-100 hover:opacity-75">
            <EditIcon color="#5C75D6" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default AutomationsBreadCrumb;
