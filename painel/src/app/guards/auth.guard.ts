import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  async canActivate() {
    if (await this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/auth/sign/in']);
      return false;
    }
  }
}
