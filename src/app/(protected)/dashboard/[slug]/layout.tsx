import InfoBar from '@/components/global/infobar';
import Sidebar from '@/components/global/sidebar';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { PrefetchUserAutomations, PrefetchUserProfile } from '@/react-query/prefetch';
import React from 'react';

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = async ({ children, params }: Props) => {
  const query = new QueryClient();

  try {
    await PrefetchUserProfile(query);
    await PrefetchUserAutomations(query);
  } catch (error) {
    console.error('Prefetch error:', error);
  }

  return (
    <HydrationBoundary state={dehydrate(query)}>
      <div className="p-3">
        {/* Sidebar */}
        <Sidebar slug={params.slug} />
        {/* Navbar */}
        <div className="flex flex-col overflow-auto lg:ml-[250px] lg:py-5 lg:pl-10">
          <InfoBar slug={params.slug} />
          {children}
        </div>
      </div>
    </HydrationBoundary>
  );
};

export default Layout;
