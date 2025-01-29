'use client';
import { cn } from '@/lib/utils';
import React, { PropsWithChildren } from 'react';

export function CardDashedGridLines({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <section className="w-full my-10 md:my-20 justify-start relative z-20 bg-gradient-to-br from-gray-100 to-white dark:from-neutral-900 dark:to-neutral-950">
      <div className={cn('p-6', className)}>{children}</div>
      <GridLineHorizontal className="top-0" offset="200px" />
      <GridLineHorizontal className="bottom-0 top-auto" offset="200px" />
      <GridLineVertical className="left-0" offset="80px" />
      <GridLineVertical className="left-auto right-0" offset="80px" />
    </section>
  );
}

export const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.3)',
          '--height': '1px',
          '--width': '5px',
          '--fade-stop': '90%',
          '--offset': offset || '200px', //-100px if you want to keep the line inside
          '--color-dark': 'rgba(255, 255, 255, 0.3)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'absolute w-[calc(100%+var(--offset))] h-[var(--height)] left-[calc(var(--offset)/2*-1)]',
        'bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          '--background': '#ffffff',
          '--color': 'rgba(0, 0, 0, 0.3)',
          '--height': '5px',
          '--width': '1px',
          '--fade-stop': '90%',
          '--offset': offset || '150px', //-100px if you want to keep the line inside
          '--color-dark': 'rgba(255, 255, 255, 0.3)',
          maskComposite: 'exclude',
        } as React.CSSProperties
      }
      className={cn(
        'absolute h-[calc(100%+var(--offset))] w-[var(--width)] top-[calc(var(--offset)/2*-1)]',
        'bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]',
        '[background-size:var(--width)_var(--height)]',
        '[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]',
        '[mask-composite:exclude]',
        'z-30',
        'dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]',
        className
      )}
    ></div>
  );
};
