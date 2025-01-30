import { buildingAreaSchema, buildingNameSchema } from '@/forms/common.schema';
import * as yup from 'yup';

export enum VehicleType {
  CAR = 'car',
  MOTORCYCLE = 'motorcycle',
}

export const vehicleTypeSchema = yup
  .string()
  .oneOf(
    Object.values(VehicleType),
    `Vehicle type must be one of the following: ${Object.values(
      VehicleType
    ).join(', ')}`
  );

export type VehicleTypeSchemaType = yup.InferType<typeof vehicleTypeSchema>;

export const parkingLotSchema = yup.object().shape({
  building_name: buildingNameSchema.required('Building name is required'),
  area: buildingAreaSchema.required('Building Area is required'),
  lot_number: yup.number().required('Lot number is required'),
});

export type ParkingLotSchemaType = yup.InferType<typeof parkingLotSchema>;

export const parkingSettingsSchema = yup.object().shape({
  vehicle_type: vehicleTypeSchema.required('Vehicle type is required'),
});
