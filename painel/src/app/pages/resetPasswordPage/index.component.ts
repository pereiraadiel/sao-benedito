import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class ResetPasswordPageComponent implements OnInit, OnDestroy {
  resetForm = {
    password: '',
    confirmation: '',
    token: '',
  };

  error = false;
  lockSubmit = true;
  message: string = '';

  constructor(
    private readonly api: ApiService,
    private readonly titleService: Title,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Alterar senha | Paróquia São Benedito');
    this.route.params.subscribe((params) => {
      this.resetForm.token = params['token'];
    });
  }

  ngOnDestroy() {}

  handleFormChange() {
    this.message = '';
    this.error = false;
    if (this.resetForm.password) {
      this.lockSubmit = false;
    }
  }

  async handleSubmit() {
    if (this.lockSubmit) return;

    this.lockSubmit = true;
    this.message = 'Atualizando a sua senha de acesso...';
    if (
      this.resetForm.confirmation.length === 0 ||
      this.resetForm.password.length === 0
    ) {
      this.error = true;
      this.message = 'As senhas não podem estar vazias';
      return;
    }

    if (this.resetForm.confirmation !== this.resetForm.password) {
      this.error = true;
      this.message = 'As senhas não conferem';
      return;
    }

    const response = await this.api.auth.reset(this.resetForm);

    if (response.hasError) {
      console.error(response);
      this.error = true;
      this.message =
        response.message ||
        'Ocorreu um erro desconhecido! tente novamente mais tarde.';
    } else {
      this.message = response.message;
    }
  }
}
