'use client';
import { cn } from '@/lib/utils';
import { Button } from '@heroui/react';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ThemeSwitcher } from '../common/ThemeSwitcher';

export const MainNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (y) => {
      if (y >= 100 && !isScrolled) {
        setIsScrolled(true);
      } else if (y < 100 && isScrolled) {
        setIsScrolled(false);
      }
    });

    return () => unsubscribe();
  }, [isScrolled, scrollY]);

  const navItems = [
    {
      name: 'Work',
      link: '#',
    },
    {
      name: 'Services',
      link: '#',
    },
    {
      name: 'Pricing',
      link: '#',
    },
    {
      name: 'Contact',
      link: '#',
    },
  ];

  return (
    <div className="w-screen fixed top-0 inset-x-0 !z-50">
      <DesktopNav navItems={navItems} isScrolled={isScrolled} />
      <MobileNav navItems={navItems} isScrolled={isScrolled} />
    </div>
  );
};

const DesktopNav = ({ navItems, isScrolled }: any) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
      }}
      className={cn(
        'hidden lg:flex flex-row  self-start bg-transparent items-center justify-between py-2 mx-auto px-4 rounded-full relative z-[60] w-full transition-all duration-2500 ',
        'sticky top-0 inset-x-0',
        {
          'bg-white/80 dark:bg-neutral-950/70 backdrop-blur-md max-w-4xl mt-6 dark:shadow-dark shadow-lg':
            isScrolled,
          'bg-transparent dark:bg-transparent max-w-7xl backdrop-blur-none mt-0':
            !isScrolled,
        }
      )}
      transition={{ type: 'spring', stiffness: 70 }}
    >
      <Logo />
      <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-2 lg:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200">
        {navItems.map((navItem: any, idx: number) => (
          <Link
            onMouseEnter={() => setHovered(idx)}
            className="text-neutral-800 dark:text-neutral-300 relative px-4  py-2"
            key={`link=${idx}`}
            href={navItem.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="w-full h-full absolute inset-0 bg-gray-100 dark:bg-neutral-800 rounded-full"
              />
            )}
            <span className="relative z-20">{navItem.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-4">
        <ThemeSwitcher />
        <Link href="/login">
          <Button
            color="primary"
            variant="shadow"
            radius="full"
            className="font-semibold"
          >
            Login Business Profile
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

const MobileNav = ({ navItems, isScrolled }: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        // animate={{
        //   borderRadius: open ? '4px' : '2rem',
        // }}
        key={String(open)}
        className={cn(
          'flex relative flex-col lg:hidden rounded-full justify-between items-center bg-white dark:bg-neutral-950  mx-auto px-4 py-2 transition-all duration-2500 ',
          {
            'bg-white/80 dark:bg-neutral-950/70 backdrop-blur-md w-[90%] mt-6 dark:shadow-dark shadow-lg':
              isScrolled,
            'bg-transparent dark:bg-transparent  w-screen backdrop-blur-none mt-0 px-6':
              !isScrolled,
          }
        )}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Logo />
          {open ? (
            <IconX
              className="text-black dark:text-white"
              onClick={() => setOpen(!open)}
            />
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <ThemeSwitcher />
              <IconMenu2
                className="text-black dark:text-white"
                onClick={() => setOpen(!open)}
              />
            </div>
          )}
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex rounded-lg absolute top-16 bg-white dark:bg-neutral-950 inset-x-0 z-20 flex-col items-start justify-start gap-4 w-full px-4 py-8"
            >
              {navItems.map((navItem: any, idx: number) => (
                <Link
                  key={`link=${idx}`}
                  href={navItem.link}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <motion.span className="block">{navItem.name} </motion.span>
                </Link>
              ))}
              <button className="px-8 py-2 w-full rounded-lg bg-primary dark:text-black font-medium text-white shadow-[0px_-2px_0px_0px_rgba(255,255,255,0.4)_inset]">
                Login Business Profile
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4  text-black px-2 py-1  relative z-20"
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
