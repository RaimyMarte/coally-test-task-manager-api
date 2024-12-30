import { clientResponse } from "./clientResponse";

const defaultTitle = 'Acción realizada.';
const defaultMessage = "Solicitud completada con éxito.";

interface ISuccessResponseParams {
  data?: any;    
  title?: string;   
  message?: string; 
}

export const successResponse = ({ data = null, title, message }: ISuccessResponseParams) => {

  const response = clientResponse({
    data,
    isSuccess: true,
    message: message || defaultMessage,
    statusCode: 200,
    title: title || defaultTitle,
  });

  return { response };
};
