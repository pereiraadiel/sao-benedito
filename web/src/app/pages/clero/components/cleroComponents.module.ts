import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CleroCardComponent } from './card/card.component';

@NgModule({
  declarations: [CleroCardComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [CleroCardComponent],
})
export class CleroComponentsModule {}
