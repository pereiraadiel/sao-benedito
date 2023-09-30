import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConstanst } from '../constants/environment.constant';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = EnvironmentConstanst.api.url;

  constructor(private http: HttpClient) {}

  getDadosDaAPI() {
    return this.http.get(this.apiUrl);
  }

  getAllEvents() {
    try {
      console.warn(this.apiUrl, '→')
      return this.http.get(`${this.apiUrl}/events`);
    } catch (error) {
      console.error(error);
      return '' as unknown as Observable<Object>;
    }
  }
}
