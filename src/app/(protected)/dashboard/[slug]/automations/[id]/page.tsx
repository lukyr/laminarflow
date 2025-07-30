import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations';
import { FileWarningIcon } from 'lucide-react';
import Trigger from '@/components/global/automations/trigger';
import React from 'react';

type Props = {
  params: { id: string };
};

const Page = ({ params }: Props) => {
  //WIP: prefetch user automation data

  return (
    <div className="flex flex-col items-center gap-y-20">
      <AutomationsBreadCrumb id={params.id} />
      <div className="flex w-full flex-col gap-y-3 rounded-xl bg-[#1D1D1D] p-5 lg:w-10/12 xl:w-6/12">
        <div className="flex gap-x-2">
          <FileWarningIcon />
          When...
        </div>
        <Trigger id={params.id} />
      </div>
    </div>
  );
};

export default Page;
