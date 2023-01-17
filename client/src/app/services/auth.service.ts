import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authUrl = 'https://blue-night-6822.fly.dev';
  constructor(private httpClient: HttpClient) {}

  loggedIn: Boolean = this.isLoggedIn();

  proceedRegister(user: any) {
    return this.httpClient.post<User>(`${this.authUrl}/signup`, user);
  }

  proceedLogin(loginData: any) {
    return this.httpClient.post(`${this.authUrl}/signin`, loginData);
  }

  isLoggedIn() {
    return localStorage.getItem('token') != null;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  getResponse() {
    return localStorage.getItem('response');
  }
}
