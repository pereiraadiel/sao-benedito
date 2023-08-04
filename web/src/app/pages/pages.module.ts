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

@NgModule({
  declarations: [
    NotFoundPageComponent,
    HomePageComponent,
    CleroPageComponent,
    NossaHistoriaPageComponent,
    PadroeiroPageComponent,
    HorariosPageComponent,
  ],
  imports: [
    BrowserModule,
    HomeComponentsModule,
    CleroComponentsModule,
    HorariosComponentsModule,
  ],
  providers: [],
  exports: [NotFoundPageComponent, HomePageComponent],
})
export class PagesModule {}
