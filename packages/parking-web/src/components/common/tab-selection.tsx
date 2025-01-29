import { Tab, Tabs, TabsProps } from '@heroui/react';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Icon } from '../icons/Icon';
import { CarIcon } from '../icons/car-icon';
import { MotorIcon } from '../icons/motor-icon';

export const data = [
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

type DataType = {
  id: string;
  name: string;
  icon?: JSX.Element;
  isDisabled?: boolean;
};

type TabSelectionProps<Data extends DataType> = {
  defaultSelected: string;
  data: Data[];
  value?: string;
  classNames?: TabsProps['classNames'];
  hideIconOnMobile?: boolean;
  onSelectionChange?: (selected: string) => void;
};

export default function TabSelection<Data extends DataType>({
  defaultSelected,
  data,
  classNames,
  hideIconOnMobile,
  onSelectionChange,
  value,
}: TabSelectionProps<Data>) {
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
      variant="bordered"
      aria-label="Options"
      color="primary"
      classNames={{
        ...classNames,
        base: clsx('z-10 p-1', classNames?.base),
        tab: clsx(
          'app-tab-item text-black shadow-none md:min-h-[30px]',
          classNames?.tab
        ),
        tabList: clsx('bg-transparent !rounded-lg w-full', classNames?.tabList),
        cursor: clsx('!rounded-md', classNames?.cursor),
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
              <span>{type.name}</span>
            </div>
          }
        />
      ))}
    </Tabs>
  );
}
