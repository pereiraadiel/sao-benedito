import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppHeroComponent } from './hero/index.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CardContentWrapperComponent } from './cardContentWrapper/index.component';

@NgModule({
  declarations: [AppHeroComponent, CardContentWrapperComponent],
  imports: [BrowserModule, AtomsModule],
  providers: [],
  exports: [AppHeroComponent, CardContentWrapperComponent],
})
export class MoleculesModule {}
