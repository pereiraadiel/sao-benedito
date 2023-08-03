import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './pages/notFound/notFoundPage.component';
import { HomePageComponent } from './pages/home/homePage.component';
import { CleroPageComponent } from './pages/clero/cleroPage.component';
import { NossaHistoriaPageComponent } from './pages/nossaHistoria/nossaHistoriaPage.component';
import { PadroeiroPageComponent } from './pages/padroeiro/padroeiroPage.component';
import { ComunidadesPageComponent } from './pages/comunidades/comunidadesPage.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'padroeiro',
    title: 'Padroeiro | Paróquia São Benedito',
    component: PadroeiroPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'nossa-historia',
    title: 'Nossa História | Paróquia São Benedito',
    component: NossaHistoriaPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'clero',
    title: 'Clero | Paróquia São Benedito',
    component: CleroPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'comunidades',
    title: 'Comunidades | Paróquia São Benedito',
    component: ComunidadesPageComponent,
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
