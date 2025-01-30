'use client';

import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import { CircularProgress } from '@heroui/react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Content() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/setup-account');
    }, 2500);
  }, []);

  return (
    <section className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center">
      <motion.div
        initial={{
          y: 40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          ease: 'linear',
          duration: 0.5,
        }}
      >
        <CardDashedGridLines className="p-8 flex flex-col items-center min-w-64 space-y-8">
          <CircularProgress color="primary" />
          <h2 className="text-2xl font-semibold">Processing invite...</h2>
          <p className="text-center mt-4 text-base md:text-md text-neutral-500 dark:text-neutral-400  max-w-3xl mx-auto relative z-10">
            Thank you for accepting the invite! We are processing your request.
            Please wait a moment while we set up your account and grant you
            access. You will be redirected shortly.
          </p>
        </CardDashedGridLines>
      </motion.div>
    </section>
  );
}
