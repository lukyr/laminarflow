import { useListener } from '@/hooks/use-automations';
import React from 'react';
import TriggerButton from '../trigger-button';
import { AUTOMATION_LISTENERS } from '@/constants/automation';
import { SubscriptionPlan } from '../../subscription-plan';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '../../loader';

type Props = {
  id: string;
};

const ThenAction = ({ id }: Props) => {
  const { onSetListener, register, onFormSubmit, listener: Listener, isPending } = useListener(id);

  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-2">
        {AUTOMATION_LISTENERS.map((listener) =>
          listener.type === 'SMARTAI' ? (
            <SubscriptionPlan key={listener.type} type="PRO">
              <div
                onClick={() => onSetListener(listener.type)}
                key={listener.id}
                className={cn(
                  Listener === listener.type
                    ? 'bg-gradient-to-br from-[#3352CC] to-[#1C2D70]'
                    : 'bg-background-88',
                  'transaction flex cursor-pointer flex-col gap-y-2 rounded-xl p-3 duration-100 hover:opacity-80'
                )}
              >
                <div className="flex items-center gap-x-2">
                  {listener.icon}
                  <p>{listener.label}</p>
                </div>
                <p>{listener.description}</p>
              </div>
            </SubscriptionPlan>
          ) : (
            <div
              onClick={() => onSetListener(listener.type)}
              key={listener.id}
              className={cn(
                Listener === listener.type
                  ? 'bg-gradient-to-br from-[#3352CC] to-[#1C2D70]'
                  : 'bg-background-88',
                'flex cursor-pointer flex-col gap-y-2 rounded-xl p-3 hover:opacity-80',
                'transition duration-100'
              )}
            >
              <div className="flex items-center gap-x-2">
                {listener.icon}
                <p>{listener.label}</p>
              </div>
              <p>{listener.description}</p>
            </div>
          )
        )}

        <form onSubmit={onFormSubmit} className="flex flex-col gap-y-2">
          <Textarea
            {...register('prompt')}
            placeholder={
              Listener === 'SMARTAI'
                ? 'Add a prompt that your smart ai can use ...'
                : 'Add a message you want send to your customers'
            }
            className="border-none bg-background-88 outline-none ring-0 focus:ring-0"
          />
          <Input
            {...register('reply')}
            placeholder="Add an reply for comments (Optional)"
            className="border-none bg-background-88 outline-none ring-0 focus:ring-0"
          />
          <Button className="w-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] font-medium text-white">
            <Loader state={isPending}>Add Listener</Loader>
          </Button>
        </form>
      </div>
    </TriggerButton>
  );
};

export default ThenAction;
