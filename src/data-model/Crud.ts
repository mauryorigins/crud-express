// --------------------------------------IMPORTS------------------------------------
// Dependencies
import Joi from 'joi';
// --------------------------MODEL DATA JOI VALIDATORS-----------------------
export function validateAddData(data: unknown): Joi.ValidationResult {
  const schema = Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    age: Joi.number().required(),
    edit: Joi.boolean()
  });
  return schema.validate(data);
}

export function validatePutData(data: unknown): Joi.ValidationResult {
  const schema = Joi.object({
    newData: Joi.object({
      name: Joi.string().required(),
      lastName: Joi.string().required(),
      age: Joi.number().required(),
      edit: Joi.boolean()
    }),
    dataName: Joi.string()
  });
  return schema.validate(data);
}

// ----------------------------- TS TYPE ---------------------------
export interface Persona {
  name: string;
  lastName: string;
  age: number;
  edit:boolean
}
