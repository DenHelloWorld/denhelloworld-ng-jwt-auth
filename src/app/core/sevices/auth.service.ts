import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiResponse, LoginPayload, RegisterPayload, User } from '../model/common.model';
import { apiEndpoint, LocalStorage } from '../constants/contstants';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _http = inject(HttpClient);
  private router = inject(Router);

  register(payload: RegisterPayload) {
    return this._http.post<ApiResponse<User>>(`${apiEndpoint.Auth.Register}`, payload);
  }

  login(payload: LoginPayload) {
    return this._http.post<ApiResponse<User>>(`${apiEndpoint.Auth.Login}`, payload).pipe(
      map(response => {
        if (response.status && response.token) {
          localStorage.setItem(LocalStorage.token, response.token);
        }
        return response;
      }),
    );
  }

  me() {
    return this._http.get<ApiResponse<User>>(`${apiEndpoint.Auth.Me}`);
  }

  logout() {
    localStorage.removeItem(LocalStorage.token);
    this.router.navigate(['login']);
  }
}
