'use client';

import { ContentLayout } from '@/components/ContentLayout';
import { GridPatternFeatures } from '@/components/features/grid-pattern-features';
import SelectHeader from '@/components/headers/select-header';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaList, FaPeopleCarry } from 'react-icons/fa';
import { IoIosTrendingUp } from 'react-icons/io';
import {
  MdEventAvailable,
  MdOutlineSupportAgent,
  MdPayment,
} from 'react-icons/md';
import { TbCurrencyPeso, TbDeviceImacSearch } from 'react-icons/tb';
import { RoughNotation, RoughNotationGroup } from 'react-rough-notation';

export default function WhyPartnerSection() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section id="why-partner-with-decazen" className="pt-12 md:pt-20">
      <div className="absolute inset-0 w-screen h-full bg-white dark:bg-background left-0 top-0" />
      <ContentLayout
        className="min-h-screen flex flex-col space-y-12 md:space-y-20 "
        ref={ref}
      >
        <SelectHeader>
          <RoughNotationGroup show={isInView}>
            <h2 className="text-bold text-2xl md:text-4xl lg:text-5xl font-bold tracking-tight  text-center w-fit mx-auto text-neutral-8000 dark:text-neutral-100 text-neutral-800">
              Why{' '}
              <RoughNotation
                type="underline"
                animationDuration={3000}
                iterations={3}
                animationDelay={2500}
                color="#facc1580"
              >
                partnering
              </RoughNotation>{' '}
              with{' '}
              <strong className="text-primary-500 dark:text-primary">
                Decazen
              </strong>
              ?
            </h2>
          </RoughNotationGroup>
        </SelectHeader>
        <GridPatternFeatures
          classNames={{
            base: 'px-8 md:px-0 pb-12',
          }}
          items={[
            {
              title: 'Maximize Your Earnings',
              description:
                'List your parking space and set your own rates to make the most of your unused parking area.',
              icon: <TbCurrencyPeso className="h-6 w-6" />,
            },
            {
              title: 'Simple Listing & Management',
              description:
                'Easily list your space and manage bookings with our user-friendly platform, designed to save you time and effort',
              icon: <FaList className="h-6 w-6" />,
            },
            {
              title: 'Help Your Community',
              description:
                'Provide much-needed parking options to residents and visitors in your area, making a positive impact while earning.',
              icon: <FaPeopleCarry className="h-6 w-6" />,
            },
            {
              title: 'Full Control Over Availability',
              description:
                'Set your own availability, so you’re in control of when your space is booked.',
              icon: <MdEventAvailable className="h-6 w-6" />,
            },
            {
              title: 'Seamless Booking & Payments',
              description:
                'Accept bookings and payments securely through our platform, ensuring smooth transactions with minimal hassle.',
              icon: <MdPayment className="h-6 w-6" />,
            },
            {
              title: 'Increased Visibility',
              description:
                'Reach a wider audience of potential customers actively searching for parking, helping to keep your space occupied.',
              icon: <TbDeviceImacSearch className="h-6 w-6" />,
            },
            {
              title: 'Boost Occupancy Rates',
              description:
                'With our platform, you’ll see higher demand and more consistent bookings, making the most of your space.',
              icon: <IoIosTrendingUp className="h-6 w-6" />,
            },
            {
              title: 'Customer Support',
              description:
                'Enjoy dedicated support from our team to resolve any issues quickly and ensure a smooth experience.',
              icon: <MdOutlineSupportAgent className="h-6 w-6" />,
            },
          ]}
        />
      </ContentLayout>
    </section>
  );
}
