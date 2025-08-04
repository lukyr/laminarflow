import { Button } from '@/components/ui/button';
import { useSubscription } from '@/hooks/use-subscription';
import { CreditCardIcon, Loader2 } from 'lucide-react';
import React from 'react';

type Props = {};

const PaymentButton = (props: Props) => {
  const { isProcessing, onSubscribe } = useSubscription();

  return (
    <Button
      disabled={isProcessing}
      onClick={onSubscribe}
      className="rounded-full bg-gradient-to-br from-[#9685DB] via-[#9434E6] to-[#CC3BD4] font-bold text-white"
    >
      {isProcessing ? <Loader2 className="animate-spin" /> : <CreditCardIcon />}
      Upgrade
    </Button>
  );
};

export default PaymentButton;
