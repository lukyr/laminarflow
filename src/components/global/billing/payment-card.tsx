import { Button } from '@/components/ui/button';
import { PLANS } from '@/constants/pages';
import { cn } from '@/lib/utils';
import { CircleCheck } from 'lucide-react';
import React from 'react';

type Props = {
  label: string;
  current: 'PRO' | 'FREE';
  landing?: boolean;
};

const PaymentCard = ({ label, current, landing }: Props) => {
  return (
    <div
      className={cn(
        label !== current
          ? 'bg-in-active'
          : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
        'overflow-hidden rounded-xl p-[2px]'
      )}
    >
      <div
        className={cn(
          landing && 'radial--gradient--pink',
          'flex flex-col rounded-xl bg-background-99 py-5 pl-5 pr-10'
        )}
      >
        {landing ? (
          <h2 className="text-2xl">
            {label === 'PRO' && 'Premium Plan'}
            {label === 'FREE' && 'Standard'}
          </h2>
        ) : (
          <h2 className="text-2xl">
            {label === current ? 'Your Current Plan' : current === 'PRO' ? 'Downgrade' : 'Upgrade'}
          </h2>
        )}
        <p className="mb-2 text-sm text-text-secondary">
          This is what your plan covers for automations and Ai features
        </p>
        {label === 'PRO' ? (
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent">
            Smart AI
          </span>
        ) : (
          <p className="mt-2 font-bold text-text-secondary">Standar</p>
        )}
        {label === 'PRO' ? (
          <p className="mb-2">
            <b className="text-xl">$99</b>/month
          </p>
        ) : (
          <p className="mb-2 text-xl">Free</p>
        )}

        {PLANS[label === 'PRO' ? 1 : 0].features.map((i) => (
          <p key={i} className="mt-2 flex gap-2 text-muted-foreground">
            <CircleCheck className="text-indigo-500" />
            {i}
          </p>
        ))}

        {landing ? (
          <Button
            className={cn(
              'mt-5 rounded-full',
              label === 'PRO'
                ? 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white'
                : 'bg-background-88 text-white hover:text-background-88'
            )}
          >
            {label === current ? 'Get Started' : current === 'PRO' ? 'Free' : 'Get Started'}
          </Button>
        ) : (
          <Button
            className={cn('mt-5 rounded-full bg-background-88 text-white hover:text-background-88')}
            disabled={label === current}
          >
            {label === current ? 'Active' : current === 'PRO' ? 'Downgrade' : 'Upgrade'}
          </Button>
        )}
      </div>
    </div>
  );
};

export default PaymentCard;
