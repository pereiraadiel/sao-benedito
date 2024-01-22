import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class RequestResetPasswordPageComponent implements OnInit, OnDestroy {
  requestResetForm = {
    email: '',
  };

  error = false;
  lockSubmit = true;
  message: string = '';

  constructor(
    private readonly api: ApiService,
    private readonly titleService: Title
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Recuperar acesso | Paróquia São Benedito');
  }

  ngOnDestroy() {}

  handleFormChange() {
    this.message = '';
    this.error = false;
    if (this.requestResetForm.email) {
      this.lockSubmit = false;
    }
  }

  async handleSubmit() {
    if (this.lockSubmit) return;

    this.lockSubmit = true;
    this.message = 'Solicitando código de recuperação...';
    const response = await this.api.auth.requestReset(this.requestResetForm);

    if (response.hasError) {
      this.error = true;
      this.message =
        response.message ||
        'Ocorreu um erro desconhecido! tente novamente mais tarde.';
    } else {
      this.message = response.message;
    }
  }
}
