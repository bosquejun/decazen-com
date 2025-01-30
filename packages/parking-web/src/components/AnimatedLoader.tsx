'use client';

import darkLoaderData from '@/assets/lotties/dark-loader.json';
import lightLoaderData from '@/assets/lotties/light-loader.json';
import { CircularProgress } from '@heroui/react';
import lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function AnimatedLoader() {
  const [isClient, setIsClient] = useState(false);
  const [Lottie, setLottie] = useState<typeof lottie | null>(null);

  useEffect(() => {
    const loadLottie = async () => {
      setIsClient(true);
      setLottie((await import('lottie-react')).default);
    };
    loadLottie();
  }, []);

  return isClient && Lottie != null ? (
    <div className="w-32 h-32 mb-16">
      <div className="dark:hidden block">
        <Lottie animationData={lightLoaderData} loop autoPlay />
      </div>
      <div className="dark:block hidden">
        <Lottie animationData={darkLoaderData} loop autoPlay />
      </div>
    </div>
  ) : (
    <CircularProgress color="primary" />
  );
}
