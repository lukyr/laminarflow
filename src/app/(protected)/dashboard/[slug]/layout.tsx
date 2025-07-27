import Navbar from '@/components/global/navbar';
import Sidebar from '@/components/global/sidebar';
import React from 'react';

type Props = {
  children: React.ReactNode;
  params: { slug: string };
};

const Layout = ({ children, params }: Props) => {
  return (
    <div className="p-3">
      {/* Sidebar */}
      <Sidebar slug={params.slug} />
      {/* Navbar */}
      <div className="flex flex-col overflow-auto lg:ml-[250px] lg:py-5 lg:pl-10">
        <Navbar slug={params.slug} />
      </div>
    </div>
  );
};

export default Layout;
