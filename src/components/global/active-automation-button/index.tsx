import { Button } from '@/components/ui/button';
import React from 'react';
import Loader from '../loader';
import { InspectionPanelIcon, Rss } from 'lucide-react';

type Props = {};

const ActiveAutomationButton = (props: Props) => {
  //WIP: Setup optimistic ui
  //WIP getch some automation data
  return (
    <Button className="mx-2 ml-4 rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium text-white hover:opacity-80 lg:px-10">
      {/*WIP Set the loading state*/}
      <Loader state={false}>
        <Rss />
        <p className="hidden lg:inline">Activate</p>
      </Loader>
    </Button>
  );
};

export default ActiveAutomationButton;
