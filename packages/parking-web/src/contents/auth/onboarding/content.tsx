'use client';

import { CircularProgress } from '@heroui/react';
import { useRouter } from 'next/navigation';
import { lazy, Suspense, useState } from 'react';

export default function Content() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [steps] = useState([
    {
      title: 'user-profile',
      component: lazy(() => import('./user-profile.section')),
    },
    {
      title: 'parking-lot',
      component: lazy(() => import('./parking-lot.section')),
    },
  ]);

  const handleOnSubmit = async (stepIndex: number, data: any) => {
    if (stepIndex + 1 >= steps.length) {
      router.replace('/dashboard');
      return;
    }
    // do something with data
    setCurrentStep(stepIndex + 1);
  };

  return (
    <section className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center">
      <Suspense fallback={<CircularProgress color="primary" />}>
        {steps.map((step, idx) => {
          const Component = step.component;
          return currentStep === idx ? (
            <Component
              key={idx}
              onSubmit={(data) => handleOnSubmit(idx, data)}
            />
          ) : null;
        })}
      </Suspense>
    </section>
  );
}
