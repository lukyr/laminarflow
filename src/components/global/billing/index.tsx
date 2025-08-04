'use client';
import React from 'react';
import PaymentCard from './payment-card';
import { useQueryUser } from '@/hooks/use-queries';

type Props = {
  label: string;
  current: 'PRO' | 'FREE';
  landing?: boolean;
};

const Billing = ({ label, current, landing = false }: Props) => {
  const { data } = useQueryUser();

  return (
    <div className="container flex w-full flex-col gap-5 lg:w-10/12 lg:flex-row xl:w-8/12">
      <PaymentCard current={data?.data?.subscription?.plan!} label="PRO" />
      <PaymentCard current={data?.data?.subscription?.plan!} label="FREE" />
    </div>
  );
};

export default Billing;
