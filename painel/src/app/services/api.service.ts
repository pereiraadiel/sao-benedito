import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConstanst } from '../constants/environment.constant';
import {
  RequestUserResetPassword,
  ResetUserPassword,
  SignUserIn,
} from './contracts/auth.contract';
import { ServiceResponse } from './contracts/service.contract';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = EnvironmentConstanst.api.url;

  constructor(private http: HttpClient) {}

  auth = {
    reset: ({ password, token }: ResetUserPassword) => {
      return new Promise<ServiceResponse>((resolve, reject) => {
        this.http
          .post(`${this.apiUrl}/auth/reset`, {
            password,
            token,
          })
          .subscribe(
            (response) => {
              resolve({
                message: `Sua senha foi alterada com sucesso! Você já pode fazer login na sua conta`,
                hasError: false,
              });
            },
            (error) => {
              console.error(error);
              if (error.status === 429)
                resolve({
                  message:
                    'Muitas requisições! Aguarde alguns instantes e tente novamente!',
                  hasError: true,
                });
              if (error.error.message) {
                resolve({
                  message: error.error.message,
                  hasError: true,
                });
              }
              resolve(error);
            }
          );
      });
    },
    requestReset: ({ email }: RequestUserResetPassword) => {
      return new Promise<ServiceResponse>((resolve, reject) => {
        this.http
          .post(`${this.apiUrl}/auth/reset/request`, {
            email,
          })
          .subscribe(
            (response) => {
              console.log(response);
              resolve({
                message: `Siga as instruções que enviamos para o email ${email} para recuperar o acesso a sua conta!`,
                hasError: false,
              });
            },
            (error) => {
              console.error(error);
              if (error.status === 429)
                resolve({
                  message:
                    'Muitas requisições! Aguarde alguns instantes e tente novamente!',
                  hasError: true,
                });
              if (error.error.message) {
                resolve({
                  message: error.error.message,
                  hasError: true,
                });
              }
              resolve(error);
            }
          );
      });
    },
    signIn: ({ username, password }: SignUserIn) => {
      return new Promise<ServiceResponse>((resolve, reject) => {
        this.http
          .post(`${this.apiUrl}/auth/sign/in`, {
            email: username,
            password,
          })
          .subscribe(
            (response) => {
              console.log(response);
              localStorage.setItem(
                '@saobenedito:access',
                (response as any).accessToken
              );
              resolve({
                message: 'Usuário autenticado com sucesso!',
                hasError: false,
              });
            },
            (error) => {
              console.error(error);
              if (error.status === 429)
                resolve({
                  message:
                    'Muitas requisições! Aguarde alguns instantes e tente novamente!',
                  hasError: true,
                });
              if (error.error.message) {
                resolve({
                  message: error.error.message,
                  hasError: true,
                });
              }
              resolve(error);
            }
          );
      });
    },
  };
}
