import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HorarioCardComponent } from './card/card.component';

@NgModule({
  declarations: [HorarioCardComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [HorarioCardComponent],
})
export class HorariosComponentsModule {}
