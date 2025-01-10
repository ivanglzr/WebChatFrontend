export interface IResponse {
  statusCode: number;
  message: string;
}

export interface IResponseWithData<T> extends IResponse {
  data: T;
}
