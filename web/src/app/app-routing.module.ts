import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './components/pages/notFound/index.component';
import { HomePageComponent } from './components/pages/home/index.component';
import { SecretariaPageComponent } from './components/pages/secretaria/index.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
    data: {
      meta: {
        title: 'Paróquia São Benedito',
        description:
          "Paróquia São Benedito e Comunidade Sant'Ana - Diocese de Uberlândia-MG",
      },
    },
  },
  {
    path: 'secretaria',
    title: 'Secretaria | Paróquia São Benedito',
    component: SecretariaPageComponent,
    pathMatch: 'full',
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
