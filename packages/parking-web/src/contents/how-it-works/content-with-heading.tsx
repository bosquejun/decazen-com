'use client';
import { ContentLayout } from '@/components/ContentLayout';
import SelectHeader from '@/components/headers/select-header';
import { motion } from 'framer-motion';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { FeaturesSectionDemo } from './list-how-it-works';

export const HowItWorksContentWithHeading: React.FC = () => {
  return (
    <ContentLayout
      id="features"
      className="flex flex-col space-y-12 md:space-y-20 md:justify-start justify-center min-h-screen px-12 pb-12 relative"
    >
      <div>
        <SelectHeader>
          <h2 className="text-bold text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center w-fit mx-auto text-neutral-8000 dark:text-neutral-100 text-neutral-800">
            How{' '}
            <span className="text-primary-500 dark:text-primary">
              Decazen Parking
            </span>{' '}
            Works
          </h2>
        </SelectHeader>
        <motion.p
          initial={{
            y: 40,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5,
            delay: 0.2,
          }}
          className="text-center mt-6 text-base md:text-lg text-neutral-500 dark:text-neutral-400  max-w-3xl mx-auto relative z-10"
        >
          <Balancer>
            Decazen Parking is a platform that connects drivers with parking
            spots. It allows drivers to reserve a parking spot and complete the
            payment before arriving at the destination.
          </Balancer>
        </motion.p>
      </div>
      <FeaturesSectionDemo />
    </ContentLayout>
  );
};
