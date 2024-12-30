export interface IClientResponse {
  data?: any;
  isSuccess: boolean;
  message: string;
  statusCode: number;
  title: string;
}

export const clientResponse = ({
  data = null,
  isSuccess,
  message,
  statusCode,
  title,
}: IClientResponse): IClientResponse => ({
  data,
  isSuccess,
  message,
  statusCode,
  title,
});
