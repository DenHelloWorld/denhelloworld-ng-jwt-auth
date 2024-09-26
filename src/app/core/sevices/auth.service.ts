import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ApiResponse, LoginPayload, RegisterPayload, User } from '../model/common.model';
import { apiEndpoint, LocalStorage } from '../constants/contstants';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = signal<boolean>(false);
  private _http = inject(HttpClient);
  private router = inject(Router);

  constructor() {
    if (this.getUserToken()) {
      this.isLoggedIn.update(() => true);
    }
  }

  register(payload: RegisterPayload) {
    return this._http.post<ApiResponse<User>>(`${apiEndpoint.Auth.Register}`, payload);
  }

  login(payload: LoginPayload) {
    return this._http.post<ApiResponse<User>>(`${apiEndpoint.Auth.Login}`, payload).pipe(
      map(response => {
        if (response.status && response.token) {
          localStorage.setItem(LocalStorage.token, response.token);
          this.isLoggedIn.update(() => true);
        }
        return response;
      }),
    );
  }

  me() {
    return this._http.get<ApiResponse<User>>(`${apiEndpoint.Auth.Me}`);
  }

  getUserToken() {
    return localStorage.getItem(LocalStorage.token);
  }

  logout() {
    localStorage.removeItem(LocalStorage.token);
    this.isLoggedIn.update(() => false);
    this.router.navigate(['login']);
  }
}
