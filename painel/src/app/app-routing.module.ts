import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/notFound/notFoundPage.component';
import { SignInPageComponent } from './pages/signInPage/index.component';
import { RequestResetPasswordPageComponent } from './pages/requestResetPasswordPage/index.component';
import { ResetPasswordPageComponent } from './pages/resetPasswordPage/index.component';
import { HomePageComponent } from './pages/homePage/index.component';
import { AuthGuard } from './guards/auth.guard';
import { MediasPageComponent } from './pages/mediasPage/index.component';
import { NoticesPageComponent } from './pages/noticesPage/index.component';
import { CleroPageComponent } from './pages/cleroPage/index.component';
import { TimesPageComponent } from './pages/timesPage/index.component';
import { SecretaryPageComponent } from './pages/secretaryPage/index.component';
import { CommunitiesPageComponent } from './pages/communitiesPage/index.component';
import { PatronPageComponent } from './pages/patronPage/index.component';
import { HistoryPageComponent } from './pages/historyPage/index.component';
import { EventsPageComponent } from './pages/eventsPage/index.component';
import { ProjectsPageComponent } from './pages/projectsPage/index.component';

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
    path: 'midias',
    component: MediasPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Midias | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'avisos',
    component: NoticesPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Avisos | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'clero',
    component: CleroPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Clero | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'horarios',
    component: TimesPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Horários | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'secretaria',
    component: SecretaryPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Secretaria | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'comunidades',
    component: CommunitiesPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Comunidades | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'padroeiro',
    component: PatronPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Padroeiro | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'historia',
    component: HistoryPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Historia | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'eventos',
    component: EventsPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Eventos | Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'projetos',
    component: ProjectsPageComponent,
    pathMatch: 'full',
    canActivate: [AuthGuard],
    data: {
      meta: {
        title: 'Projetos | Paróquia São Benedito',
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
