export interface MongoDocument {
  _id: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
}

export interface OtplessApiResponse<T> {
  data: T;
  token?: string;
  message?: string;
}
