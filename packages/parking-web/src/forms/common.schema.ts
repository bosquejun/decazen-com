import * as yup from 'yup';

export enum BuildingName {
  N = 'N',
  M = 'M',
}

export enum BuildingArea {
  AREA_1 = 'A1',
  AREA_2 = 'A2',
  AREA_3 = 'A3',
  AREA_4 = 'A4',
}

export const buildingNameSchema = yup
  .string()
  .oneOf(
    Object.values(BuildingName),
    `Building must be one of the following: ${Object.values(BuildingName).join(
      ', '
    )}`
  );

export type BuildingNameSchemaType = yup.InferType<typeof buildingNameSchema>;

export const buildingAreaSchema = yup.string().oneOf(
  Object.values(BuildingArea),
  `Area must be one of the following: ${Object.values(BuildingArea)
    .map((area) => area.split('').pop())
    .join(', ')}`
);

export type BuildingAreaSchemaType = yup.InferType<typeof buildingAreaSchema>;
