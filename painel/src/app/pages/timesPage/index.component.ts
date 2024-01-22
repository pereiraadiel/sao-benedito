import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-times',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class TimesPageComponent implements OnInit, OnDestroy {
  loginForm = {
    username: '',
    password: '',
  };

  error = false;
  lockSubmit = true;
  openMobileSidebarOverlay = false;
  message: string = '';

  constructor(
    private readonly api: ApiService,
    private readonly titleService: Title,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Horários | Paróquia São Benedito');
  }

  ngOnDestroy() {}

  handleFormChange() {
    this.message = '';
    this.error = false;
    if (this.loginForm.username) {
      this.lockSubmit = false;
    }
  }

  handleToggleMobileSidebarOverlay() {
    this.openMobileSidebarOverlay = !this.openMobileSidebarOverlay;
  }

  async handleLogout() {
    const accessToken = localStorage.getItem('@saobenedito:access');
    if (!accessToken) return;
    await this.api.auth.signOut({
      accessToken,
    });
    this.router.navigate(['/auth/sign/in']);
  }

  async handleSubmit() {
    if (this.lockSubmit) return;

    this.lockSubmit = true;
    this.message = 'Validando credenciais...';
    const response = await this.api.auth.signIn(this.loginForm);

    if (response.hasError) {
      this.error = true;
      this.message =
        response.message ||
        'Ocorreu um erro desconhecido! tente novamente mais tarde.';
    } else {
      this.message = 'Autenticado!';
    }
  }
}
