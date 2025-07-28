import { PAGE_ICON } from '@/constants/pages';
import React from 'react';

type Props = {
  page: string;
  slug?: string;
};

const MainBreadCrumb = ({ page, slug }: Props) => {
  return (
    <div className="flex flex-col items-start">
      {page === 'Home' && (
        <div className="flex w-full justify-center">
          <div className="radial--gradient flex w-4/12 flex-col items-center py-5 lg:py-10">
            <p className="text-lg text-text-secondary">Welcome back</p>
            <h2 className="text-4xl font-medium capitalize">{slug}!</h2>
          </div>
        </div>
      )}
      <span className="radial--gradient inline-flex items-center gap-x-2 py-5 pr-16 lg:py-10">
        {PAGE_ICON[page.toUpperCase()]}
        <h2 className="font-semibol capitalized text-3xl">{page}</h2>
      </span>
    </div>
  );
};

export default MainBreadCrumb;
