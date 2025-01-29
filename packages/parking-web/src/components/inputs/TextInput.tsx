import { Input, InputProps } from '@heroui/react';
import { useEffect, useState } from 'react';
import {
  FieldValues,
  FormState,
  Path,
  PathValue,
  UseFormReturn,
} from 'react-hook-form';

export type BaseInputProps<
  TFormValues extends FieldValues,
  FormOptional = true
> = {
  formatValue?: (
    value: PathValue<TFormValues, Path<TFormValues>>
  ) => PathValue<TFormValues, Path<TFormValues>>;
} & FormOptional extends true
  ? {
      formProps?: UseFormReturn<TFormValues>;
      name: Path<TFormValues>;
    }
  : {
      formProps: UseFormReturn<TFormValues>;
      name: Path<TFormValues>;
    };

export type TextInputProps<
  TFormValues extends FieldValues,
  FormOptional = true
> = Omit<InputProps, 'name'> & BaseInputProps<TFormValues, FormOptional>;

export const getFieldError = <TFormValues extends FieldValues>(
  name: Path<TFormValues>,
  errors?: FormState<TFormValues>['errors']
) => {
  const keys = name?.split('.');
  if (keys?.length > 1) {
    return keys.reduce(
      (obj: any, key: string) => obj && obj?.[key as any],
      errors as any
    );
  }

  return errors?.[name];
};

export default function TextInput<
  TFormValues extends FieldValues,
  FormOptional = true
>({ formProps, ...props }: TextInputProps<TFormValues, FormOptional>) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    formState: { isSubmitting, defaultValues },
    register,
    watch,
  } = formProps ||
  ({
    formState: {
      errors: {},
    },
    register: (field: string) => ({}),
    watch: (field: string) => ({}),
  } as UseFormReturn<TFormValues>);

  const inputName = props['name'];

  const errorMessage = getFieldError(inputName, formProps?.formState.errors)
    ?.message as string;

  const { required, ...registeredField } = register(inputName);

  const value = watch(inputName);

  if (!isClient) {
    return null;
  }

  return (
    <Input
      {...registeredField}
      {...props}
      value={value}
      isInvalid={errorMessage ? true : props?.isInvalid}
      errorMessage={errorMessage || props?.errorMessage}
      variant="bordered"
      isRequired={props.isRequired || required}
      isDisabled={isSubmitting || props.isDisabled || registeredField.disabled}
      defaultValue={defaultValues?.[inputName]}
      name={inputName as string}
      aria-label={inputName}
      aria-labelledby={inputName}
    />
  );
}
