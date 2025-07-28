import { Button } from '@/components/ui/button';
import React from 'react';

type Props = {
  title: string;
  description: string;
  icon: React.ReactNode;
  strategy: 'INSTAGRAM' | 'CRM';
};

const IntegrationCard = ({ description, icon, title, strategy }: Props) => {
  //WIP: wire up fetching data and get the integrations from the db
  return (
    <div className="flex items-center gap-x-5 rounded-2xl border-2 border-[#3352CC] p-5">
      {icon}
      <div className="flex flex-1 flex-col">
        <h3 className="text-xl">{title}</h3>
        <p className="w-full text-base text-[#9D9D9D] md:w-10/12 xl:w-8/12 2xl:w-6/12">
          {description}
        </p>
      </div>
      <Button
        // onClick={onInstaAuth}
        // disabled={}
        className="to-#1C2D70 rounded-full bg-gradient-to-br from-[#3352CC] text-lg font-medium text-white transition duration-100 hover:opacity-70"
      >
        Connected
      </Button>
    </div>
  );
};

export default IntegrationCard;
