import { cn } from '@/lib/utils';
import { PropsWithChildren } from 'react';

export const GridBgLayout = ({
  children,
  inverted,
  className,
  type = 'grid',
}: PropsWithChildren<{
  inverted?: boolean;
  className?: string;
  type?: 'grid' | 'dot' | 'grid-small';
  opacity?: number;
}>) => {
  return (
    <div
      className={cn('w-screen h-screen', className, {
        [`dark:bg-grid-white/[0.15] bg-grid-black/[0.1]`]: type === 'grid',
        [`dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.3]`]:
          type === 'grid-small',
        [`dark:bg-dot-white/[0.15] bg-dot-black/[0.3]`]: type === 'dot',
      })}
    >
      {inverted ? (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent)] md:[mask-image:radial-gradient(ellipse_at_center,black_50%,transparent)]"></div>
      ) : (
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
      )}
      {children}
    </div>
  );
};
