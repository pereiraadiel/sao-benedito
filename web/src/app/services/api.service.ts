import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvironmentConstanst } from '../constants/environment.constant';
import { ServiceResponse } from './contracts/service.contract';
import { Communities } from './contracts/communities.contract';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = EnvironmentConstanst.api.url;

  constructor(private http: HttpClient) {}

  communities = {
    getAll: () => {
      return new Promise<ServiceResponse<Communities>>((resolve, reject) => {
        this.http.get(`${this.apiUrl}/communities`).subscribe(
          (response) => {
            resolve({
              message: 'Dados obtidos com sucesso!',
              data: (response as any).items,
              totalItems: (response as any).total,
              hasError: false,
            });
          },
          (error) => {
            if (error.status === 429)
              resolve({
                message:
                  'Muitas requisições! Aguarde alguns instantes e tente novamente!',
                data: [],
                hasError: true,
              });
            if (error.error.message) {
              resolve({
                message: error.error.message,
                data: [],
                hasError: true,
              });
            }
            resolve(error);
          }
        );
      });
    },

    getOneById: (id: string) => {},
  };

  user = {};
}
