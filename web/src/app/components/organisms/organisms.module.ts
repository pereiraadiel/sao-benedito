import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './card/index.component';
import { MassTimesComponent } from './massTimes/index.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';

@NgModule({
  imports: [BrowserModule, AtomsModule, MoleculesModule],
  declarations: [CardComponent, MassTimesComponent],
  providers: [],
  exports: [CardComponent, MassTimesComponent],
})
export class OrganismsModule {}
