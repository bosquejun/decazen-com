import { cn } from '@/lib/utils';
import { IconCurrencyPeso, IconParking } from '@tabler/icons-react';
import { FaSearchLocation } from 'react-icons/fa';
import { TbLiveView } from 'react-icons/tb';

export function FeaturesSectionDemo() {
  const features = [
    {
      title: 'Find the Perfect Spot',
      description:
        "Easily search for available parking. Filter options based on your needs, whether it's covered parking or a nearby space for quick access.",
      icon: <FaSearchLocation className="h-6 w-6" />,
    },
    {
      title: 'Reserve in No Time',
      description:
        'Book your parking in just a few taps. Get instant confirmation and clear details on where to park, so you can head straight to your spot without delays.',
      icon: <TbLiveView className="h-6 w-6" />,
    },
    {
      title: 'Simple, Secure Payments',
      description:
        'Pay directly through the app using your preferred method—whether credit card, debit, or digital wallet—making the process smooth and convenient.',
      icon: <IconCurrencyPeso className="h-6 w-6" />,
    },
    {
      title: 'Enjoy Hassle-Free Parking',
      description:
        'Arrive, park, and relax! With your spot reserved and payment settled, enjoy a seamless parking experience without the stress.',
      icon: <IconParking className="h-6 w-6" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 md:py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-primary-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
