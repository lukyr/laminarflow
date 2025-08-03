'use client';
import { LogoInstagram } from '@/svgs/logo-instagram';
import { ArrowBigRightIcon } from 'lucide-react';
import React from 'react';

type Props = {
  type: string;
  keywords: {
    id: string;
    word: string;
    automationId: string | null;
  }[];
};

const ActiveTrigger = ({ type, keywords }: Props) => {
  return (
    <div className="w-full rounded-xl bg-background-88 p-3">
      <div className="flex items-center gap-x-2">
        {type === 'COMMENT' ? <LogoInstagram /> : <ArrowBigRightIcon />}
        <p className="text-lg">
          {type === 'COMMENT' ? 'User comments on my post.' : 'User Sends me a direct message.'}
        </p>
      </div>
      <p className="text-text-secondary">
        {type === 'COMMENT'
          ? 'If the user comments on a video that is setup to listen for keyworks, this automation will fire'
          : 'If the user send your a message that contains a keyword, this automation will fire'}
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <div
            key={keyword.id}
            className="flex items-center gap-x-2 rounded-full bg-gradient-to-br from-[#3352CC] to-[#1C2D70] px-4 py-1 font-light capitalize text-white"
          >
            <p>{keyword.word}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveTrigger;
