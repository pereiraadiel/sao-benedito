import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConstanst } from '../constants/environment.constant';
import { SignUserIn } from './contracts/auth.contract';
import { ErrorResponse } from './contracts/error.contract';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = EnvironmentConstanst.api.url;

  constructor(private http: HttpClient) {}

  auth = {
    signIn: ({ username, password }: SignUserIn) => {
      return new Promise<true | ErrorResponse>((resolve, reject) => {
        this.http
          .post(`${this.apiUrl}/auth/sign/in`, {
            email: username,
            password,
          })
          .subscribe(
            (response) => {
              localStorage.setItem(
                '@saobenedito:access',
                (response as any).accessToken
              );
              resolve(true);
            },
            (error) => {
              console.error(error);
              if (error.status === 429)
                resolve({
                  message:
                    'Muitas requisições! Aguarde alguns instantes e tente novamente!',
                });
              if (error.error.message) {
                resolve({
                  message: error.error.message,
                });
              }
              resolve(error);
            }
          );
      });
    },
  };
}
