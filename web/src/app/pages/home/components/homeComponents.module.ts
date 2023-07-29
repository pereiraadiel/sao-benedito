import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeCardComponent } from './card/card.component';

@NgModule({
  declarations: [HomeCardComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [HomeCardComponent],
})
export class HomeComponentsModule {}
