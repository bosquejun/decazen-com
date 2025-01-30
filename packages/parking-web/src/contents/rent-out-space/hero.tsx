'use client';

import { motion } from 'framer-motion';
import Balancer from 'react-wrap-balancer';

import { ContentLayout } from '@/components/ContentLayout';
import { Button } from '@heroui/react';
import { Link } from 'next-view-transitions';
import { FaRightLong } from 'react-icons/fa6';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export const Hero = () => {
  return (
    <ContentLayout className="flex flex-col justify-center md:min-h-screen">
      <div className="flex flex-col relative grow-[0.5] py-20">
        <motion.h1
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
          }}
          className="text-3xl md:text-5xl lg:text-7xl font-semibold max-w-6xl mx-auto text-center mt-6 relative z-10 w-full"
        >
          <Balancer>
            Transform your{' '}
            <strong className="text-primary-500 dark:text-primary">
              parking space
            </strong>{' '}
            into an effortless, passive stream of{' '}
            <strong className="text-primary-500 dark:text-primary">
              earnings
            </strong>
            .
          </Balancer>
        </motion.h1>
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
            Join our platform to offer convenient parking to residents and
            visitors. Easily list your space, set your own rates, and manage
            bookings with our simple system. Help your community while
            maximizing your earnings with minimal effort.
          </Balancer>
        </motion.p>
        <motion.div
          initial={{
            y: 80,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            ease: 'easeOut',
            duration: 0.5,
            delay: 0.4,
          }}
          className="flex items-center gap-4 justify-center mt-6 relative z-10"
        >
          <div className="flex gap-6 md:gap-8 items-center mt-10 [perspective:800px] my-10">
            <Link href="#get-started">
              <Button variant="solid" color="primary" className="sm:w-52">
                Get Started Today
              </Button>
            </Link>
            <RoughNotationGroup show>
              <RoughNotation
                type="underline"
                animationDuration={0}
                iterations={3}
                color="#facc15"
              >
                <Link
                  href="/how-it-works"
                  className="text-foreground font-semibold cursor-pointer flex items-center space-x-2 hover:text-foreground-500"
                >
                  <span>How it works</span> <FaRightLong className="ml-2" />
                </Link>
              </RoughNotation>
            </RoughNotationGroup>
          </div>
        </motion.div>
      </div>
    </ContentLayout>
  );
};
