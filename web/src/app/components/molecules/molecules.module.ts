import { NgModule } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { AppHeroComponent } from './hero/index.component';
import { AtomsModule } from '../atoms/atoms.module';
import { CardContentWrapperComponent } from './cardContentWrapper/index.component';

@NgModule({
  imports: [BrowserModule, AtomsModule, HammerModule],
  declarations: [AppHeroComponent, CardContentWrapperComponent],
  providers: [],
  exports: [AppHeroComponent, CardContentWrapperComponent],
})
export class MoleculesModule {}
