import TextInput from '@/components/inputs/TextInput';
import { Button } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  parkingLotSchema,
  ParkingLotSchemaType,
} from './schema/parking.schema';

export default function ParkingLotForm({
  callbackUrl,
  onSubmit,
  defaultValues,
}: {
  callbackUrl?: string;
  defaultValues: Partial<ParkingLotSchemaType>;
  onSubmit: (data: ParkingLotSchemaType) => Promise<void>;
}) {
  const formProps = useForm<ParkingLotSchemaType>({
    resolver: yupResolver(parkingLotSchema),
    defaultValues: {},
  });
  const { handleSubmit } = formProps;

  const onSubmitHandler: SubmitHandler<ParkingLotSchemaType> = async (data) => {
    await toast.promise(onSubmit(data), {
      loading: 'Logging in...',
      success: 'Logged in successfully',
      error: (error) => {
        const { message } = error as Error;
        return message ?? 'Invalid credentials';
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col gap-4"
    >
      <div className="flex flex-col gap-4 w-full justify-center h-full">
        <TextInput
          formProps={formProps}
          name="building_name"
          label="Building name"
          fullWidth
          isRequired
        />
        <TextInput
          formProps={formProps}
          name="area"
          label="Building Area"
          fullWidth
          isRequired
        />
        <TextInput
          formProps={formProps}
          name="lot_number"
          type="number"
          label="Lot number"
          fullWidth
          isRequired
        />
        <Button variant="solid" color="primary" type="submit">
          Continue
        </Button>
      </div>
    </form>
  );
}
