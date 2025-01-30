import { GridBgLayout } from '@/components/layout/grid-bg-layout';
import { CircularProgress } from '@heroui/react';

export default function Loading() {
  return (
    <GridBgLayout inverted className="grid-bg-layout">
      <div className="w-screen h-screen flex items-center justify-center z-[99]">
        <div className="flex flex-col items-center space-y-4">
          <CircularProgress
            classNames={{
              indicator: 'bg-primary-500 dark:bg-primary',
            }}
          />
          <div className="z-10">
            <p className="text-default-500">Routing...</p>
          </div>
        </div>
      </div>
    </GridBgLayout>
  );
}
