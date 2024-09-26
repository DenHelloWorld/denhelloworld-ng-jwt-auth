export interface User {
  _id: string;
  name: string;
  email: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload extends LoginPayload {
  name: string;
}

export interface ApiResponse<T> {
  stetus?: boolean;
  message?: string;
  error?: string;
  data: T;
}
