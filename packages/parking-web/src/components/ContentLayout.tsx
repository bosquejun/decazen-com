import { cn } from '@/lib/utils';
import { forwardRef, PropsWithChildren } from 'react';

export const ContentLayout = forwardRef<
  HTMLDivElement,
  PropsWithChildren<{ className?: string; id?: string }>
>(({ children, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative z-10 max-w-7xl mx-auto py-12 md:py-20 px-4',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

ContentLayout.displayName = 'ContentLayout';
