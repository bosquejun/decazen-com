'use client';

import { ContentLayout } from '@/components/ContentLayout';
import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import RentoutSpaceForm from '@/forms/auth/rent-out-space.form';
import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

export default function GetStartedSection() {
  return (
    <div
      className="bg-content2 dark:bg-content1 w-full h-auto relative"
      id="get-started"
    >
      <ContentLayout className="flex flex-col py-20">
        <div className="grid grid-cols-3 items-center justify-center space-y-6 md:space-y-8">
          <div className="col-span-1 md:col-span-2">
            <motion.h1
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
              }}
              className="text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight  max-w-6xl mx-auto mt-6 relative z-10 w-full"
            >
              <Balancer>Ready to get started?</Balancer>
            </motion.h1>
            <motion.p
              initial={{
                y: 40,
                opacity: 0,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: 'easeOut',
                duration: 0.5,
                delay: 0.2,
              }}
              className="mt-6 text-base md:text-lg text-neutral-500 dark:text-neutral-400  relative z-10"
            >
              <Balancer>
                Fill out the form below to get started. Our team will reach out
                to you shortly.
              </Balancer>
            </motion.p>
          </div>
          <motion.div
            initial={{
              x: 80,
              opacity: 0,
            }}
            whileInView={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: 'easeOut',
              duration: 0.5,
              delay: 0.4,
            }}
          >
            <CardDashedGridLines
              classNames={{
                base: 'dark!from-content2 from-content1 !to-content2',
              }}
            >
              <RentoutSpaceForm
                onSubmit={async (data) => {
                  console.log(data);
                }}
              />
            </CardDashedGridLines>
          </motion.div>
        </div>
      </ContentLayout>
    </div>
  );
}
