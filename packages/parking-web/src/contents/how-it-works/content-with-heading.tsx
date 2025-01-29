'use client';

import { ContentLayout } from '@/components/ContentLayout';
import SelectHeader from '@/components/headers/select-header';
import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import React from 'react';
import { FeaturesSectionDemo } from './list-how-it-works';

export const HowItWorksContentWithHeading: React.FC = () => {
  return (
    <ContentLayout
      id="features"
      className="flex flex-col space-y-12 md:space-y-20 md:justify-start justify-center min-h-screen px-12 pb-12 relative"
    >
      <div>
        <SelectHeader>
          <h2 className="font-sans text-bold text-xl text-center md:text-4xl w-fit mx-auto font-bold tracking-tight text-neutral-8000 dark:text-neutral-100 text-neutral-800">
            How{' '}
            <span className="text-primary-500 dark:text-primary">
              Decazen Parking
            </span>{' '}
            Works
          </h2>
        </SelectHeader>
        <p className="max-w-lg text-sm text-neutral-600 text-center mx-auto mt-4 dark:text-neutral-400">
          Decazen Parking is a platform that connects drivers with parking
          spots. It allows drivers to reserve a parking spot and complete the
          payment before arriving at the destination.
        </p>
      </div>
      <CardDashedGridLines className="p-6">
        <FeaturesSectionDemo />
      </CardDashedGridLines>
    </ContentLayout>
  );
};
