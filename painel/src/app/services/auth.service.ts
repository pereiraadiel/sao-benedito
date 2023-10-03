import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly apiService: ApiService) {}

  async isAuthenticated() {
    const token = localStorage.getItem('@saobenedito:access');
    if (!token) return false;

    const isAuth = await this.apiService.user.isAuth({ accessToken: token });
    if (isAuth.message === 'Usuário não autorizado!') {
      const isRefreshed = await this.apiService.auth.refresh({
        accessToken: token,
      });
      if (isRefreshed.hasError) return false;
    }
    return true;
  }
}
