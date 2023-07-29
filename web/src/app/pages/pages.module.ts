import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundPageComponent } from './notFound/notFoundPage.component';
import { HomePageComponent } from './home/homePage.component';
import { HomeComponentsModule } from './home/components/homeComponents.module';
import { CleroComponentsModule } from './clero/components/cleroComponents.module';
import { CleroPageComponent } from './clero/cleroPage.component';

@NgModule({
  declarations: [NotFoundPageComponent, HomePageComponent, CleroPageComponent],
  imports: [BrowserModule, HomeComponentsModule, CleroComponentsModule],
  providers: [],
  exports: [NotFoundPageComponent, HomePageComponent],
})
export class PagesModule {}
