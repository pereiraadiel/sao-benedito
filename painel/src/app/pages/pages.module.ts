import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundPageComponent } from './notFound/notFoundPage.component';
import { SignInPageComponent } from './signInPage/index.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { RequestResetPasswordPageComponent } from './requestResetPasswordPage/index.component';
import { ResetPasswordPageComponent } from './resetPasswordPage/index.component';
import { HomePageComponent } from './homePage/index.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    SignInPageComponent,
    RequestResetPasswordPageComponent,
    ResetPasswordPageComponent,
    HomePageComponent,
  ],
  imports: [BrowserModule, ComponentsModule, FormsModule],
  providers: [],
  exports: [
    NotFoundPageComponent,
    SignInPageComponent,
    RequestResetPasswordPageComponent,
    ResetPasswordPageComponent,
    HomePageComponent,
  ],
})
export class PagesModule {}
