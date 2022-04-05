// --------------------------------------IMPORTS------------------------------------
// Dependencies
import { ValidationResult } from 'joi';

// --------------------------------------CONFIGURATION------------------------------------
// ---getCerts
interface WithFilesCerts {
  cert: string;
  key: string;
}

interface EmptyObj { [n: string]: never }

export type Certs = WithFilesCerts | EmptyObj

// -----------------------------------------Respond Services--------------------------------------
interface TokenData {
  _id: string;
  nombre: string;
  mail: string;
}
interface Result {
  error?: any;
  errorType?: string;
  statusError?: number;
  responseData?: any;
  tokenData?: TokenData;
}

export type CallbackResponse = {
  internalError: boolean;
  result: Result;
}

export type Callback = (params?: any) => Promise<CallbackResponse>;

// -------------------------------------------Validations----------------------------------------
export type Validator = (data: unknown) => ValidationResult;
