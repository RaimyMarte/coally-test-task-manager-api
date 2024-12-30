import { Response } from "express";
import { errorResponse } from "../response";

interface HandleUnknownError {
  error: unknown
  res: Response
  title?: string
  statusCode?: number
}

export const handleUnknownError = ({ error, res, title, statusCode }: HandleUnknownError): void => {
  if (error instanceof Error) {
    console.log(error)

    const { response } = errorResponse({ title, message: error.message, statusCode: statusCode || res.statusCode });
    res.json(response);
  } else {
    res.status(500).json({ message: 'Ocurrió un error en el servidor, intente más tarde.' });
  }
};