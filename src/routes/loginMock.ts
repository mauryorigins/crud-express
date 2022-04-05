// --------------------------------------IMPORTS------------------------------------
// ---Dependencies
import express, { Request, Response } from 'express';
// ---Model Data
import {
  validateLoginData,
  ILoginData
} from '#DataModel/loginMock';
// ---Custom
import { responseService, joiValidateService } from '#Config/respondServices';
import { Callback } from '#Config/customTypes';

// -----------------------------------CONFIG-------------------------------
const router = express.Router();

// -----------------------------------ROUTES-------------------------------
// ---- Create ---------
router.post('/logearse', (req: Request, res: Response) => {
  console.log(`request for: ${req.originalUrl}`);

  const validateBody = validateLoginData(req.body);
  if (joiValidateService(res, validateBody)) {
    responseService(res, (doLoginOnRedis as Callback), req.body);
  }
});
// --------------------------------- QUERYS AND METHODS --------------------------
async function doLoginOnRedis(data: ILoginData) {
  console.log('cosas locas en db y redis: ', data);
  // Crea un nuevo producto en la base de datos
  return {
    internalError: false,
    result: { status: 'success', data }
  };
}

export default router;
