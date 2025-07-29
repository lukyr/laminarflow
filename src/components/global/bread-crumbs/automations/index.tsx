import { ChevronRight, EditIcon, PencilLineIcon } from 'lucide-react';
import React from 'react';

type Props = {};

const AutomationsBreadCrumb = (props: Props) => {
  // WIP: get the automation data
  return (
    <div className="flex w-full items-center justify-between rounded-full bg-[#18181B1A] p-5">
      <div className="flex min-w-0 items-center gap-x-3">
        <p className="truncate text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" className="flex-shrink-0" />
        <span className="flex min-w-0 items-center gap-x-3">
          {/* WIP: Show the editing data */}
          <p className="truncate text-[#9B9CA0]">This is the automation title</p>
          <span className="flex-shrink-0 cursor-pointer transition duration-100 hover:opacity-75">
            <EditIcon color="#5C75D6" size={14} />
          </span>
        </span>
      </div>
      <div className="ml-auto flex items-center gap-x-5">
        <p className="hidden min-w-0 truncate text-sm text-text-secondary/60 md:block">
          All states are automatically saved
        </p>
        <div className="flex flex-shrink-0 gap-x-5">
          <p className="min-w-0 truncate text-sm text-text-secondary">Changes Saved</p>
          <p className="min-w-0 truncate text-sm text-text-secondary">Undo | Redo</p>
        </div>
      </div>
    </div>
  );
};

export default AutomationsBreadCrumb;
