import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, LoginPayload, RegisterPayload, User } from '../model/common.model';
import { apiEndpoint } from '../constants/contstants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);

  register(payload: RegisterPayload) {
    return this._http.post<ApiResponse<User>>(`${apiEndpoint.Auth.Register}`, payload);
  }

  login(payload: LoginPayload) {
    return this._http.post<ApiResponse<User>>(`${apiEndpoint.Auth.Login}`, payload);
  }

  me() {
    return this._http.get<ApiResponse<User>>(`${apiEndpoint.Auth.Me}`);
  }
}
