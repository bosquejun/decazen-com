import TextInput from '@/components/inputs/TextInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  initialOnboardSchema,
  InitialOnboardSchemaType,
} from './schema/auth.schema';

export default function InitialOnboardForm({
  callbackUrl,
  onSubmit,
  defaultValues,
}: {
  callbackUrl?: string;
  defaultValues: Partial<InitialOnboardSchemaType>;
  onSubmit: (data: InitialOnboardSchemaType) => Promise<void>;
}) {
  const formProps = useForm<InitialOnboardSchemaType>({
    resolver: yupResolver(initialOnboardSchema),
    defaultValues: {},
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = formProps;

  const onSubmitHandler: SubmitHandler<InitialOnboardSchemaType> = async (
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
        <h1 className="text-2xl font-semibold text-foreground">
          Welcome back,{' '}
          <strong className="text-primary-500 dark:text-primary">
            Parking owner
          </strong>
          !
        </h1>
        <p className="text-foreground-700">
          Sign in to your account to continue
        </p>
        <TextInput
          formProps={formProps}
          name="user.first_name"
          type="email"
          label="Email address"
          fullWidth
          isRequired
        />
      </div>
    </form>
  );
}
