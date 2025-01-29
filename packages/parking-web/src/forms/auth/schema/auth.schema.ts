import * as yup from 'yup';
import YupPassword from 'yup-password';

YupPassword(yup); // extend yup with password validation

export const createUserSchema = yup.object().shape({
  email: yup
    .string()
    .email('Value must be a valid email address')
    .required('Email address is required'),
  password: yup
    .string()
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol')
    .required(),
  confirm_password: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must match')
    .required(),
});

export type CreateUserSchemaType = yup.InferType<typeof createUserSchema>;

export const loginUserSchema = createUserSchema.pick(['email', 'password']);

export type LoginUserSchemaType = yup.InferType<typeof loginUserSchema>;
