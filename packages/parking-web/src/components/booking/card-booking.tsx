import { Button, Select, SelectItem } from '@heroui/react';

import moment from 'moment';
import { useState } from 'react';
import { BsArrowDown } from 'react-icons/bs';
import TabSelection from '../common/tab-selection';
import DateTimePicker from '../dates/date-time-picker';

export const animals = [
  { key: 'cat', label: 'Cat' },
  { key: 'dog', label: 'Dog' },
  { key: 'elephant', label: 'Elephant' },
  { key: 'lion', label: 'Lion' },
  { key: 'tiger', label: 'Tiger' },
  { key: 'giraffe', label: 'Giraffe' },
  { key: 'dolphin', label: 'Dolphin' },
  { key: 'penguin', label: 'Penguin' },
  { key: 'zebra', label: 'Zebra' },
  { key: 'shark', label: 'Shark' },
  { key: 'whale', label: 'Whale' },
  { key: 'otter', label: 'Otter' },
  { key: 'crocodile', label: 'Crocodile' },
];

const getCurrentTimeWithAdjustment = (
  date = new Date(),
  halfOfHour = false
) => {
  if (date.getHours() === 23 && date.getMinutes() >= 30) {
    date = new Date();
    date.setDate(date.getDate() + 1);
  }
  const minutes = date.getMinutes();
  if (minutes % 30 !== 0) {
    date.setMinutes(minutes < 30 ? 30 : 0);
    if (minutes >= 30) {
      date.setHours(date.getHours() + 1, 0, 0, 0);
    }
  }

  date.setSeconds(0, 0);
  return date;
};

const computeDuration = (fromDate: Date, untilDate: Date) => {
  const duration = moment.duration(moment(untilDate).diff(moment(fromDate)));
  const totalHours = Math.floor(duration.asHours());
  const minutes = duration.minutes();

  if (totalHours > 0) {
    return `${totalHours} ${totalHours > 1 ? 'hours' : 'hour'}${
      minutes > 0 ? ', ' : ''
    }${minutes > 0 ? `${minutes} ${minutes > 1 ? 'minutes' : 'minute'}` : ''}`;
  } else {
    return `${Math.floor(minutes)} ${minutes > 1 ? 'minutes' : 'minute'}`;
  }
};

const minimumHours = 3;

export default function CardBooking() {
  const [fromDate, setFromDate] = useState(getCurrentTimeWithAdjustment());
  const [defaultFromDate] = useState(fromDate);
  const [minimumUntilDate, setMinimumUntilDate] = useState(
    moment(getCurrentTimeWithAdjustment(new Date(), true))
      .add(minimumHours, 'hours')
      .toDate()
  );
  const [untilDate, setUntilDate] = useState(minimumUntilDate);
  return (
    <div className="w-full flex flex-col gap-y-4  items-center relative">
      <div className="w-[80%] min-w-48 flex ">
        <TabSelection
          defaultSelected="hourly"
          data={[
            {
              id: 'hourly',
              name: 'Hourly',
            },
            {
              id: 'daily',
              name: 'Daily',
            },
          ]}
          classNames={{
            base: 'w-full',
          }}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <Select
          size="sm"
          className="!rounded-lg"
          label="Building"
          placeholder="Select Building"
          items={animals}
          // classNames={{
          //   trigger: '!bg-content2 shadow-none border dark:border-white/[0.1]',
          // }}
          variant="bordered"
        >
          {(animal) => <SelectItem key={animal.key}>{animal.label}</SelectItem>}
        </Select>

        <Select
          size="sm"
          className="!rounded-lg"
          label="Building Area"
          placeholder="Select Area"
          items={animals}
          variant="bordered"
        >
          {(animal) => <SelectItem key={animal.key}>{animal.label}</SelectItem>}
        </Select>
      </div>

      <div className="flex flex-col space-y-2 justify-between items-center w-full">
        <DateTimePicker
          label="From"
          defaultMinimumDate={defaultFromDate}
          currentDate={fromDate}
          minimumDate={defaultFromDate}
          onSelectDate={(date) => {
            setFromDate(date);
            const untilDate = moment(date).add(minimumHours, 'hours').toDate();
            setMinimumUntilDate(untilDate);
            setUntilDate(untilDate);
          }}
          inputProps={{
            variant: 'bordered',
          }}
        />
        <BsArrowDown size="25" className="text-default-300 my-4" />
        <DateTimePicker
          label="Until"
          minimumDate={minimumUntilDate}
          currentDate={untilDate}
          onSelectDate={(date) => {
            if (moment(date).isSameOrBefore(moment(fromDate))) {
              setUntilDate(
                moment(fromDate).add(minimumHours, 'hours').toDate()
              );
              return;
            }
            setUntilDate(date);
          }}
          inputProps={{
            variant: 'bordered',
          }}
        />
      </div>
      <Button size="lg" fullWidth variant="shadow" color="primary">
        Find Parking Space
      </Button>
    </div>
  );
}
