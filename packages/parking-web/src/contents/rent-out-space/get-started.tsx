'use client';

import { ContentLayout } from '@/components/ContentLayout';
import { Grid } from '@/components/features/grid-pattern-features';
import RentoutSpaceForm from '@/forms/auth/rent-out-space.form';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Balancer from 'react-wrap-balancer';

export default function GetStartedSection() {
  const router = useRouter();
  return (
    <div className="bg-content2 dark:bg-neutral-950 w-full h-auto relative">
      <ContentLayout className="flex flex-col py-20">
        <div className="grid md:grid-cols-3 items-center justify-center space-y-6 md:space-y-8">
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
              className="text-center md:text-start text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight  w-full md:max-w-6xl mx-auto mt-6 relative z-10 w-full"
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
              className="text-center md:text-start mt-6 text-base md:text-lg text-neutral-500 dark:text-neutral-400  relative z-10"
            >
              <Balancer>
                Create a business account by simply filling out the form.
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
            <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
              <div className="relative mx-auto flex w-full max-w-2xl flex-col items-start gap-4 overflow-hidden rounded-3xl bg-gradient-to-b from-gray-100 to-white p-4 dark:from-neutral-900 dark:to-neutral-950 sm:p-10">
                <Grid size={20} />
                <div className="w-full">
                  <RentoutSpaceForm
                    onSubmit={async () => {
                      router.push('/onboarding');
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </ContentLayout>
    </div>
  );
}
