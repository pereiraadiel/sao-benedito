import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/notFound/notFoundPage.component';
import { SignInPageComponent } from './pages/signInPage/index.component';
import { RequestResetPasswordPageComponent } from './pages/requestResetPasswordPage/index.component';
import { ResetPasswordPageComponent } from './pages/resetPasswordPage/index.component';
import { HomePageComponent } from './pages/homePage/index.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Painel | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'auth/sign/in',
    component: SignInPageComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Autenticação | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'auth/reset',
    component: RequestResetPasswordPageComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Recuperar senha | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'auth/reset/:token',
    component: ResetPasswordPageComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Alterar senha | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: '**',
    title: '404 | Paróquia São Benedito',
    component: NotFoundPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
