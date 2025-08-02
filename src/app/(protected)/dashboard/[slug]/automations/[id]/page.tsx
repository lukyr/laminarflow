import AutomationsBreadCrumb from '@/components/global/bread-crumbs/automations';
import { FileWarningIcon } from 'lucide-react';
import Trigger from '@/components/global/automations/trigger';
import React from 'react';
import { getAutomationInfo } from '@/actions/automations';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { PrefetchUserAutomation } from '@/react-query/prefetch';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const info = await getAutomationInfo(params.id);
  return {
    title: info.data?.name,
  };
}

const Page = async ({ params }: Props) => {
  const query = new QueryClient();
  await PrefetchUserAutomation(query, params.id);

  return (
    <HydrationBoundary state={dehydrate(query)}>
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
    </HydrationBoundary>
  );
};

export default Page;
