import { cn } from '@/lib/utils';
import { Tab, Tabs, TabsProps } from '@heroui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Icon } from '../icons/Icon';
import { CarIcon } from '../icons/car-icon';
import { MotorIcon } from '../icons/motor-icon';

export const PARKING_SELECTION = [
  {
    id: 'car',
    name: 'Car',
    icon: <Icon as={CarIcon} />,
  },
  {
    id: 'motorcycle',
    name: 'Motorcycle',
    icon: <Icon as={MotorIcon} />,
  },
  {
    id: 'all',
    name: 'All',
    icon: null,
  },
];

type ParkingTypeSelection = {
  defaultSelected: string;
  data: {
    id: string;
    name: string;
    icon: JSX.Element | null;
    isDisabled?: boolean;
  }[];
  value?: string;
  classNames?: TabsProps['classNames'];
  hideIconOnMobile?: boolean;
  onSelectionChange?: (selected: string) => void;
};

export const ParkingTypeSelection = ({
  defaultSelected,
  data,
  classNames,
  hideIconOnMobile,
  onSelectionChange,
  value,
}: ParkingTypeSelection) => {
  const [selectedParkingType, setSelectedParkingType] = useState(
    defaultSelected || value
  );

  useEffect(() => {
    if (!selectedParkingType) return;
    onSelectionChange?.(selectedParkingType);
  }, [selectedParkingType]);

  useEffect(() => {
    setSelectedParkingType(value);
  }, [value]);

  return (
    <Tabs
      selectedKey={selectedParkingType}
      onSelectionChange={(selected) =>
        setSelectedParkingType(selected as string)
      }
      aria-label="Options"
      color="primary"
      classNames={{
        ...classNames,
        base: clsx(
          'bg-content2 dark:bg-content2 rounded-xl z-10 shadow-lg p-1',
          classNames?.base
        ),
        tab: clsx(
          'app-tab-item  text-black shadow-none md:min-h-[40px]',
          classNames?.tab
        ),
        tabList: clsx('bg-transparent w-full', classNames?.tabList),
      }}
      defaultSelectedKey="all"
      size="lg"
    >
      {data.map((type) => (
        <Tab
          key={type.id}
          isDisabled={type.isDisabled}
          title={
            <div className="flex items-center gap-x-2">
              <div
                className={clsx(
                  'tabIcon',
                  hideIconOnMobile ? 'hidden md:block' : ''
                )}
              >
                {type.icon && type.icon}
              </div>
              <span
                className={cn('hidden md:block', {
                  '!block': type.id === 'all',
                })}
              >
                {type.name}
              </span>
            </div>
          }
        />
      ))}
    </Tabs>
  );
};
