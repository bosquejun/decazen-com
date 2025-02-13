'use client';

import { GridBlockBackground } from '@/components/backgrounds/grid-block.backgrounds';
import { lazy, Suspense, useEffect } from 'react';
import { Hero } from './hero';
import WhyPartnerSection from './why-partner';

const FAQ = lazy(async () => import('@/contents/rent-out-space/faq'));
const GetStarted = lazy(
  async () => import('@/contents/rent-out-space/get-started')
);

export default function Content() {
  // get hash from url

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 1000);
      }
    }
  }, []);

  return (
    <div className="relative">
      <div className="absolute inset-0 z-[9]">
        <div className="relative w-full h-screen overflow-hidden">
          <GridBlockBackground />
          <div className="w-screen h-screen absolute pointer-events-none inset-0 flex items-center justify-center bg-background/70 md:bg-background [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)] radial-bg"></div>
          <div className="hidden md:block absolute bottom-0 h-24 w-screen bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>
      <Hero />
      <WhyPartnerSection />

      <section id="get-started">
        <Suspense fallback={<div>loading</div>}>
          <GetStarted />
        </Suspense>
      </section>
      <Suspense fallback={<div>loading</div>}>
        <FAQ />
      </Suspense>
    </div>
  );
}
