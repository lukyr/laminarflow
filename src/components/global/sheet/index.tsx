import React from 'react';
import { Sheet as ShadcnSheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

type Props = {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
};

const Sheet = ({ trigger, children, className, side = 'left' }: Props) => {
  return (
    <ShadcnSheet>
      <SheetTrigger className={className}>{trigger}</SheetTrigger>
      <SheetContent className="p-0" side={side}>
        {children}
      </SheetContent>
    </ShadcnSheet>
  );
};

export default Sheet;
