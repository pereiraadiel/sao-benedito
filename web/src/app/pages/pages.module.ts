import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundPageComponent } from './notFound/notFoundPage.component';
import { HomePageComponent } from './home/homePage.component';
import { HomeComponentsModule } from './home/components/homeComponents.module';
import { CleroComponentsModule } from './clero/components/cleroComponents.module';
import { CleroPageComponent } from './clero/cleroPage.component';
import { NossaHistoriaPageComponent } from './nossaHistoria/nossaHistoriaPage.component';
import { PadroeiroPageComponent } from './padroeiro/padroeiroPage.component';
import { HorariosPageComponent } from './horarios/horariosPage.component';
import { HorariosComponentsModule } from './horarios/components/horariosComponents.module';
import { ProjetosPageComponent } from './projetos/projetosPage.component';
import { ComponentsModule } from '../components/components.module';
import { SecretariaPageComponent } from './secretaria/secretariaPage.component';
import { EventosPageComponent } from './eventos/eventosPage.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    HomePageComponent,
    CleroPageComponent,
    NossaHistoriaPageComponent,
    PadroeiroPageComponent,
    HorariosPageComponent,
    ProjetosPageComponent,
    SecretariaPageComponent,
    EventosPageComponent,
  ],
  imports: [
    BrowserModule,
    HomeComponentsModule,
    CleroComponentsModule,
    HorariosComponentsModule,
    ComponentsModule,
  ],
  providers: [],
  exports: [NotFoundPageComponent, HomePageComponent],
})
export class PagesModule {}
