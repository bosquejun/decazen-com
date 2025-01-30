'use client';

import PasswordInput from '@/components/inputs/PasswordInput';
import TextInput from '@/components/inputs/TextInput';
import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import { motion } from 'framer-motion';

export default function Content() {
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
          <h2 className="text-2xl font-semibold">Setup your account</h2>
          <div className="flex flex-col gap-y-4 mt-6">
            <TextInput
              name="email"
              label="Email address"
              isRequired
              placeholder="john.doe@gmail.com"
              value=""
            />

            <PasswordInput name="email" label="Password" isRequired />
          </div>
        </CardDashedGridLines>
      </motion.div>
    </section>
  );
}
