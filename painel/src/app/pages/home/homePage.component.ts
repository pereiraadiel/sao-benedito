import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  loginForm = {
    username: '',
    password: '',
  };

  error: boolean = false;
  message: string = '';

  constructor(private readonly api: ApiService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  async handleSubmit() {
    const response = await this.api.auth.signIn(this.loginForm);
    if (response === true) {
      this.loginForm.username = 'autenticado!';
      this.message = '';
    } else {
      this.error = true;
      this.message = (response as any).error.message;
    }
  }
}
