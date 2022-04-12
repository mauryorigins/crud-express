// --------------------------------------IMPORTS------------------------------------
import express, { Request, Response } from 'express';
import { dataPerson } from '#DataModel/getData';
import { Persona } from '#DataModel/Crud';
// ---Dependencies
// ---Model Data
// import { Persona } from '#DataModel/Crud';
// ---Custom

// -----------------------------------CONFIG-------------------------------
const router = express.Router();

// -----------------------------------ROUTES-------------------------------
// ---- Create ---------
router.get('/', (req: Request, res: Response) => {
  console.log(`request for: ${req.originalUrl}`);
  const data:Persona[] = dataPerson;
  res.send(data);
  console.log(data);
});
// --------------------------------- QUERYS AND METHODS --------------------------
// async function getRedis(data: Persona) {
//   console.log('cosas locas en db y redis: ', data);
//   // Crea un nuevo producto en la base de datos
//   return {
//     internalError: false,
//     result: { status: 'success', data }
//   };
// }

export default router;
