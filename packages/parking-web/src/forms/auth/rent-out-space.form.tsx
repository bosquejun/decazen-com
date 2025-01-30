import TextInput from '@/components/inputs/TextInput';
import { Button } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  rentOutSpaceSchema,
  RentOutSpaceSchemaType,
} from './schema/auth.schema';

export default function RentoutSpaceForm({
  onSubmit,
}: {
  callbackUrl?: string;
  defaultValues?: Partial<RentOutSpaceSchemaType>;
  onSubmit: (data: RentOutSpaceSchemaType) => Promise<void>;
}) {
  const formProps = useForm<RentOutSpaceSchemaType>({
    resolver: yupResolver(rentOutSpaceSchema),
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formProps;

  const onSubmitHandler: SubmitHandler<RentOutSpaceSchemaType> = async (
    data
  ) => {
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
      <TextInput
        formProps={formProps}
        name="first_name"
        label="First name"
        fullWidth
        isRequired
      />
      <TextInput
        formProps={formProps}
        name="last_name"
        label="Last name"
        fullWidth
        isRequired
      />
      <TextInput
        formProps={formProps}
        name="email"
        type="email"
        label="Email address"
        fullWidth
        isRequired
      />
      {/* <TextInput
        formProps={formProps}
        name="mobile_number"
        type="string"
        label="Mobile number"
        fullWidth
      /> */}
      <TextInput
        formProps={formProps}
        name="building_name"
        label="Building name"
        fullWidth
        isRequired
      />

      <Button
        fullWidth
        isLoading={isSubmitting}
        size="lg"
        type="submit"
        color="primary"
        variant="shadow"
      >
        Submit
      </Button>
    </form>
  );
}
