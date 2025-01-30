import { GridBlockBackground } from '@/components/backgrounds/grid-block.backgrounds';
import { lazy, Suspense } from 'react';
import { Hero } from './hero';
import WhyPartnerSection from './why-partner';

const GetStarted = lazy(
  async () => import('@/contents/rent-out-space/get-started')
);

const FAQ = lazy(async () => import('@/contents/rent-out-space/faq'));

export default function Content() {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-[9]">
        <div className="relative w-full h-screen overflow-hidden">
          <GridBlockBackground />
          <div className="w-screen h-screen absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent)] md:[mask-image:radial-gradient(ellipse_at_center,black_30%,transparent)] radial-bg"></div>
          <div className="hidden md:block absolute bottom-0 h-24 w-screen bg-gradient-to-t from-white dark:from-black to-transparent pointer-events-none" />
        </div>
      </div>
      <Hero />
      <WhyPartnerSection />
      <Suspense fallback={<div>loading</div>}>
        <GetStarted />
      </Suspense>
      <Suspense fallback={<div>loading</div>}>
        <FAQ />
      </Suspense>
    </div>
  );
}
