'use client';

import { useEffect } from 'react';

export function SmoothScroll() {
  useEffect(() => {
    const handleClick = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id!);

        if (element) {
          const headerHeight = 80; // Account for sticky header
          const elementPosition = element.offsetTop - headerHeight;

          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return null;
}
