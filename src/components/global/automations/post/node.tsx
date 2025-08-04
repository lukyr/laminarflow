'use client';
import { Separator } from '@/components/ui/separator';
import { useQueryAutomation } from '@/hooks/use-queries';
import { LogoInstagram } from '@/svgs/logo-instagram';
import { FileWarning } from 'lucide-react';
import Image from 'next/image';
import React, { use } from 'react';

type Props = {
  id: string;
};

const PostNode = ({ id }: Props) => {
  const { data } = useQueryAutomation(id);
  return (
    data?.data &&
    data.data.posts.length > 0 && (
      <div className="relative flex w-10/12 flex-col gap-y-3 rounded-xl bg-[#1D1D1D] p-5 lg:w-8/12 xl:w-4/12">
        <div className="absolute bottom-full left-1/2 z-50 flex h-20 flex-col items-center">
          <span className="h-[9px] w-[9px] rounded-full bg-connector/10" />
          <Separator
            orientation="vertical"
            className="bottom-full flex-1 border-[1px] border-connector/10"
          />
          <span className="h-[9px] w-[9px] rounded-full bg-connector/10" />
        </div>
        <div className="flex gap-x-2">
          <FileWarning />
          If They comment on
        </div>
        <div className="flex flex-col gap-y-2 rounded-xl bg-background-88 p-3">
          <div className="flex items-center gap-x-2">
            <LogoInstagram />
            <p className="text-lg font-bold">These posts</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-x-2">
            {data.data.posts.map((post) => (
              <div
                key={post.id}
                className="relative aspect-square w-4/12 cursor-pointer overflow-hidden rounded-lg"
              >
                <Image fill sizes="100vw" src={post.media} alt={post.caption || 'Instagram Post'} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default PostNode;
