'use client';

import darkLoaderData from '@/assets/lotties/dark-loader.json';
import lightLoaderData from '@/assets/lotties/light-loader.json';
import { useEffect, useState } from 'react';

export default function Loading() {
  const [isClient, setClient] = useState(false);
  const [Lottie, setLottie] = useState<any>(null);

  useEffect(() => {
    setClient(true);
    // @ts-ignore
    import('react-lottie').then((module) => {
      setLottie(() => module.default);
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lightLoaderData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const darkAnimationOptions = {
    loop: true,
    autoplay: true,
    animationData: darkLoaderData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  if (!isClient || !Lottie) return null;

  return (
    <div className="w-screen h-screen flex items-center justify-center z-[99]">
      <div className="flex flex-col items-center space-y-4">
        <div className="hidden dark:block">
          <Lottie options={darkAnimationOptions} height={120} width={120} />
        </div>
        <div className="dark:hidden block">
          <Lottie options={defaultOptions} height={120} width={120} />
        </div>
        <div>
          <p className="text-default-500">Routing...</p>
        </div>
      </div>
    </div>
  );
}
