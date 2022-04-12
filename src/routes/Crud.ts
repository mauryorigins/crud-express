/* eslint-disable no-plusplus */
// --------------------------------------IMPORTS------------------------------------
// ---Dependencies
import express, { Request, Response } from 'express';
// ---Model Data
import { Persona, validateAddData, validatePutData } from '#DataModel/Crud';
import { dataPerson } from '#DataModel/getData';
// ---Custom
import { responseService, joiValidateService } from '#Config/respondServices';
import { Callback } from '#Config/customTypes';

// -----------------------------------CONFIG-------------------------------
const router = express.Router();
// --- Conts
let persons:Persona[] = dataPerson;
// -----------------------------------ROUTES-------------------------------
// ---- Create ---------
// ---- GET ---------
router.get('/Get', (req: Request, res: Response) => {
  console.log(`request for: ${req.originalUrl}`);
  responseService(res, getPerson as Callback, null);
});
// ---- POST ---------
router.post('/Add', (req: Request, res: Response) => {
  console.log(`request for: ${req.originalUrl}`);
  const validateBody = validateAddData(req.body);
  if (joiValidateService(res, validateBody)) {
    responseService(res, addPerson as Callback, req.body);
  }
});
// // ---- PUT ---------
router.put('/Put', (req: Request, res: Response) => {
  console.log(`request for: ${req.originalUrl}`);
  const validateBody = validatePutData(req.body);
  if (joiValidateService(res, validateBody)) {
    responseService(res, putPerson as unknown as Callback, req.body);
  }
});
// ---- DELETE ---------
router.delete('/Delete/:deletUser', (req: Request, res: Response) => {
  console.log(`request for: ${req.originalUrl}`);
  responseService(res, deletePerson as unknown as Callback, req.params.deletUser);
});
// --------------------------------- QUERYS AND METHODS --------------------------
async function putPerson(putData:any) {
  const { newData, dataName } = putData;
  console.log('cosas locas en db y redis: ', dataName);
  // Crea un nuevo producto en la base de datos
  let putNew:Persona[] = [];
  persons.forEach((element) => {
    if (element.name === dataName) {
      putNew = [...putNew, newData];
    } else {
      putNew = [...putNew, element];
    }
  });
  persons = putNew;
  return {
    internalError: false,
    result: { status: 'success', data: persons }
  };
}
async function deletePerson(deletUuser: string) {
  console.log('cosas locas en db y redis: ', deletUuser);
  // Crea un nuevo producto en la base de datos
  let deleteArray:Persona[] = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < persons.length; i++) {
    const element = persons[i];
    if (persons[i].name !== deletUuser) {
      deleteArray = [...deleteArray, element];
    }
  }
  persons = deleteArray;
  return {
    internalError: false,
    result: { status: 'success', data: persons }
  };
}

async function addPerson(data: Persona) {
  console.log('cosas locas en db y redis: ', data);
  // Crea un nuevo producto en la base de datos
  persons = [...persons, data];
  return {
    internalError: false,
    result: { status: 'success', data: persons }
  };
}

async function getPerson() {
  return {
    internalError: false,
    result: { status: 'success', data: persons }
  };
}

export default router;
