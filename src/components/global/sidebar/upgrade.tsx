import React from 'react';
import PaymentButton from '../payment-button';

type Props = {};

const UpgradeCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-y-3 rounded-2xl bg-[#252525] p-3">
      <span className="text-sm">
        Upgrade to {''}
        <span className="bg-gradient-to-r from-[#CC3BD4] to-[#D064AC] bg-clip-text font-bold text-transparent">
          Smart AI
        </span>
      </span>
      <p className="text-sm font-light text-[#9B9CA0]">
        Unlock all features <br /> including AI and more
      </p>
      <PaymentButton />
    </div>
  );
};

export default UpgradeCard;
