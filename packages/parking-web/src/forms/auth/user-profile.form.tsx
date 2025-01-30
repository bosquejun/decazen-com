import TextInput from '@/components/inputs/TextInput';
import { Button } from '@heroui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { userProfileSchema, UserProfileSchemaType } from './schema/auth.schema';

export default function UserProfileForm({
  callbackUrl,
  onSubmit,
  defaultValues,
}: {
  callbackUrl?: string;
  defaultValues: Partial<UserProfileSchemaType>;
  onSubmit: (data: UserProfileSchemaType) => Promise<void>;
}) {
  const formProps = useForm<UserProfileSchemaType>({
    resolver: yupResolver(userProfileSchema),
    defaultValues: {},
  });
  const { handleSubmit } = formProps;

  const onSubmitHandler: SubmitHandler<UserProfileSchemaType> = async (
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
      <div className="flex flex-col gap-4 w-full justify-center h-full">
        <TextInput
          formProps={formProps}
          name="user.first_name"
          label="First name"
          fullWidth
          isRequired
        />
        <TextInput
          formProps={formProps}
          name="user.last_name"
          label="Last name"
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
