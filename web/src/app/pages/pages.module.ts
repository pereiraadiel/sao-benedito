import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundPageComponent } from './notFound/notFoundPage.component';
import { HomePageComponent } from './home/homePage.component';
import { HomeComponentsModule } from './home/components/homeComponents.module';

@NgModule({
  declarations: [NotFoundPageComponent, HomePageComponent],
  imports: [BrowserModule, HomeComponentsModule],
  providers: [],
  exports: [NotFoundPageComponent, HomePageComponent],
})
export class PagesModule {}
