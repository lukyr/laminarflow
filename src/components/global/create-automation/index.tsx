'use client';
import { Button } from '@/components/ui/button';
import React, { useMemo } from 'react';
import Loader from '../loader';
import { Workflow } from 'lucide-react';
import { useCreateAutomation } from '@/hooks/use-automations';
import { v4 } from 'uuid';

type Props = {};

const CreateAutomation = (props: Props) => {
  const mutationId = useMemo(() => v4(), []);
  const { isPending, mutate } = useCreateAutomation(mutationId);

  console.log(mutationId);

  return (
    <Button
      onClick={() =>
        mutate({
          name: 'Untitled',
          id: mutationId,
          createdAt: new Date(),
          keywords: [],
        })
      }
      className="rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] py-6 font-medium text-white hover:opacity-80 lg:px-10"
    >
      <Loader state={isPending}>
        <Workflow />
        <p className="hidden lg:inline">Create Automation</p>
      </Loader>
    </Button>
  );
};

export default CreateAutomation;
