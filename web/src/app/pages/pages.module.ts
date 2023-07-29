import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundPageComponent } from './notFound/notFoundPage.component';

@NgModule({
  declarations: [NotFoundPageComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [NotFoundPageComponent],
})
export class PagesModule {}
