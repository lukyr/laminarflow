import { Button } from '@/components/ui/button';
import React from 'react';
import Loader from '../loader';
import { Workflow } from 'lucide-react';

type Props = {};

const CreateAutomation = (props: Props) => {
  //WIP: Create the automation in the database using mutate

  return (
    <Button className="rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] py-6 font-medium text-white hover:opacity-80 lg:px-10">
      <Loader state={false}>
        <Workflow />
        <p className="hidden lg:inline">Create Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
