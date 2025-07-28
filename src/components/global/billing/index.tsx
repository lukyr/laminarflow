import React from 'react';
import PaymentCard from './payment-card';

type Props = {
  label: string;
  current: 'PRO' | 'FREE';
  landing?: boolean;
};

const Billing = ({ label, current, landing = false }: Props) => {
  //WIP: Fetch billing information for the customer
  return (
    <div className="container flex w-full flex-col gap-5 lg:w-10/12 lg:flex-row xl:w-8/12">
      <PaymentCard current={'FREE'} label="FREE" />
      <PaymentCard current={'FREE'} label="PRO" />
    </div>
  );
};

export default Billing;
