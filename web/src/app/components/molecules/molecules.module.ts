import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHeroComponent } from './hero/index.component';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [AppHeroComponent],
  imports: [BrowserModule, AtomsModule],
  providers: [],
  exports: [AppHeroComponent],
})
export class MoleculesModule {}
