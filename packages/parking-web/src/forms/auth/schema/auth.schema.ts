import * as yup from 'yup';
import YupPassword from 'yup-password';
import { parkingLotSchema, parkingSettingsSchema } from './parking.schema';

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

export const rentOutSpaceSchema = createUserSchema.shape({
  first_name: yup.string().required('First name is required'),
  last_name: yup.string().required('Last name is required'),
  // building_name: buildingNameSchema.required('Building name is required'),
});

export type RentOutSpaceSchemaType = yup.InferType<typeof rentOutSpaceSchema>;

export const initialOnboardSchema = yup.object().shape({
  user: rentOutSpaceSchema.pick(['first_name', 'last_name']),
  parking_lot: parkingLotSchema.optional(),
  parking_settings: parkingSettingsSchema.optional(),
});

export type InitialOnboardSchemaType = yup.InferType<
  typeof initialOnboardSchema
>;

export const userProfileSchema = initialOnboardSchema.pick(['user']);

export type UserProfileSchemaType = yup.InferType<typeof userProfileSchema>;
