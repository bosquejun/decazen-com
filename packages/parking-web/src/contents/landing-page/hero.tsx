import { ContentLayout } from '@/components/ContentLayout';
import { Button, Spacer } from '@heroui/react';
import Image from 'next/image';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

import CardBooking from '@/components/booking/card-booking';
import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import { motion } from 'framer-motion';
import { Link } from 'next-view-transitions';
import { FaRightLong } from 'react-icons/fa6';
import Balancer from 'react-wrap-balancer';

export const Hero = ({ isInView }: { isInView?: boolean }) => {
  return (
    <>
      <div className="h-screen w-screen absolute z-[9] hidden dark:block">
        <Image
          src={require('@/assets/images/route-map.jpg')}
          alt="route map"
          className="w-full h-auto max-h-screen dark:opacity-30 z-[1] object-fill"
        />
      </div>
      <ContentLayout className="min-h-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-start ">
          <div className="md:col-span-3 py-8 md:py-10 ">
            <Spacer y={24} className="hidden md:block" />
            <RoughNotationGroup show={isInView}>
              <motion.h2
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
                className="text-center sm:text-start text-3xl md:text-4xl lg:text-6xl font-semibold max-w-6xl mx-auto mt-6 relative z-10 w-full"
              >
                <Balancer>
                  Stop Searching,
                  {/* <br className="block md:hidden lg:block" /> */}
                  <RoughNotation
                    type="highlight"
                    animationDuration={3000}
                    iterations={3}
                    color="#facc1580"
                    multiline
                  >
                    <span className="text-currentColor">Start Parking</span>
                  </RoughNotation>{' '}
                  - Find a Spot <br className="block md:hidden" />
                  <RoughNotation
                    type="underline"
                    animationDuration={1000}
                    iterations={10}
                    color="#facc15"
                  >
                    Quickly and Easily!
                  </RoughNotation>
                </Balancer>
              </motion.h2>
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
                className="text-center sm:text-start mt-10 text-base md:text-lg text-neutral-500 dark:text-neutral-400  max-w-3xl mx-auto relative z-10"
              >
                <Balancer>
                  Parking made easier and more efficient. Our platform lets you
                  search for, reserve, and park in available spaces in
                  real-time, so you can{' '}
                  <RoughNotation
                    type="underline"
                    animationDuration={1000}
                    iterations={3}
                    color="#facc15"
                  >
                    spend less time
                  </RoughNotation>{' '}
                  looking and more time doing what you love.
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
                className="flex gap-4 items-center relative z-10"
              >
                <div className="flex sm:justify-start justify-center sm:flex-row flex-col gap-6 md:gap-8 items-center mt-10 w-full [perspective:800px]">
                  <Button variant="solid" color="primary" className="w-52">
                    Book now
                  </Button>
                  <RoughNotation
                    type="underline"
                    animationDuration={1000}
                    animationDelay={500}
                    iterations={3}
                    color="#facc15"
                  >
                    <Link
                      href="/rent-out-space"
                      className="text-foreground font-semibold cursor-pointer flex items-center space-x-2 hover:text-foreground-500"
                    >
                      Rent out your space <FaRightLong className="ml-2" />
                    </Link>
                  </RoughNotation>
                </div>
              </motion.div>
            </RoughNotationGroup>
          </div>
          <motion.div
            initial={{
              x: 80,
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{
              ease: 'easeOut',
              duration: 0.5,
              delay: 0.6,
            }}
            className="flex overflow-hidden h-full w-full relative flex-shrink-0 p-4 md:p-10 col-span-1 md:col-span-2"
          >
            <CardDashedGridLines className="px-6 py-10 min-w-72 md:min-w-96">
              <CardBooking />
            </CardDashedGridLines>
          </motion.div>
        </div>
      </ContentLayout>
    </>
  );
};
