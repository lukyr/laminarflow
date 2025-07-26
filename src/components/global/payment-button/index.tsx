import { Button } from '@/components/ui/button';
import React from 'react';

type Props = {};

const PaymentButton = (props: Props) => {
  //WIP: get their subscription details
  //WIP: Loading state
  return (
    <Button className="rounded-full bg-gradient-to-br from-[#9685DB] via-[#9434E6] to-[#CC3BD4] font-bold text-white">
      Upgrade
    </Button>
  );
};

export default PaymentButton;
