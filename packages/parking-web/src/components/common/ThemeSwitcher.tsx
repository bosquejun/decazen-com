// app/components/ThemeSwitcher.tsx
'use client';

import { Button } from '@heroui/react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { LuMoon, LuSun } from 'react-icons/lu';

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button
      isIconOnly
      variant="light"
      size="sm"
      className="text-neutral-800 dark:text-neutral-300"
      onPress={toggleTheme}
    >
      {theme === 'light' ? (
        <LuMoon className="h-4 w-4" />
      ) : (
        <LuSun className="h-4 w-4" />
      )}
    </Button>
  );
}
