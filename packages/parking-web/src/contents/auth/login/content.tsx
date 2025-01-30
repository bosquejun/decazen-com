'use client';
import {
  IconBrandFacebookFilled,
  IconBrandGoogleFilled,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

import { CardDashedGridLines } from '@/components/ui/card-dashed-grid-lines';
import LoginUserForm from '@/forms/auth/login.form';
import Image from 'next/image';
import Link from 'next/link';

export default function AuthLoginContent() {
  return (
    <section className="mx-auto flex h-screen max-w-lg flex-col items-center justify-center">
      <CardDashedGridLines className="p-8 flex flex-col items-center min-w-64 space-y-8">
        <Logo />

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
            ease: 'easeOut',
            duration: 0.5,
          }}
          className="mt-4"
        >
          <LoginUserForm defaultValues={{}} onSubmit={async () => {}} />
        </motion.div>

        <div className="my-6 h-px w-full bg-neutral-300 dark:bg-neutral-800" />

        <div className="flex w-full flex-col gap-4 sm:flex-row">
          <button
            disabled
            className="flex flex-1 items-center justify-center space-x-2 rounded-md border border-neutral-200 bg-gray-100 px-4 py-3 text-neutral-700 shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.05)_inset] transition duration-200 hover:bg-gray-100/80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[0px_1.5px_0px_0px_rgba(255,255,255,0.05)_inset] opacity-30"
          >
            <IconBrandFacebookFilled className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
            <span className="text-sm">Login with Facebook</span>
          </button>
          <button
            disabled
            className="flex flex-1 items-center justify-center space-x-2 rounded-md border border-neutral-200 bg-gray-100 px-4 py-3 text-neutral-700 shadow-[0px_1.5px_0px_0px_rgba(0,0,0,0.05)_inset] transition duration-200 hover:bg-gray-100/80 dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-300 dark:shadow-[0px_1.5px_0px_0px_rgba(255,255,255,0.05)_inset] opacity-30"
          >
            <IconBrandGoogleFilled className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
            <span className="text-sm">Login with Google</span>
          </button>
        </div>
        <div className="flex flex-col w-full mt-4 md:mt-8">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            Don't have an account?{' '}
            <Link
              href="/rent-out-space"
              className="text-primary-500 font-medium dark:text-primary"
            >
              Get started
            </Link>
          </p>
        </div>
      </CardDashedGridLines>
    </section>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image
        src="https://assets.aceternity.com/logo-dark.png"
        alt="logo"
        width={30}
        height={30}
      />
      <span className="font-medium text-black dark:text-white">DevStudio</span>
    </Link>
  );
};
