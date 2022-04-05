// --------------------------------------IMPORTS------------------------------------
// ---Dependencies
import { Response } from 'express';
import Joi from 'joi';
// ---Other
import { Callback, CallbackResponse } from '#Config/customTypes';

// -----------------------------------METHODS------------------------------
export async function responseService(
  res: Response,
  callBack: Callback,
  cbParams: unknown
): Promise<void> {
  // Do a query operation and respond
  let getSomething: CallbackResponse = { internalError: false, result: {} };
  if (cbParams) {
    getSomething = await callBack(cbParams);
  } else {
    getSomething = await callBack();
  }

  const { internalError, result } = getSomething;
  if (internalError) {
    const { statusError } = result;
    const { errorType } = result;
    const genMessage = 'Error de operacion en el servidor';
    res.status(statusError || 400).send({ ...result, errorType: errorType || genMessage });
  } else {
    res.send(result);
  }
}

export function joiValidateService(res: Response, validation: Joi.ValidationResult): boolean {
  const { error } = validation;
  if (error) {
    const { details } = error;
    console.log(`------joiValidateService-----\nJoi error: \n${details}`);
    const errorType = `Datos erroneos: ${details[0].message}`;
    const result = { errorType, joiErrors: details };
    res.status(400).send(result);
    return false;
  }
  return true;
}

export default null;
