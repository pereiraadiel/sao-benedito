import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundPageComponent } from './notFound/index.component';
import { HomePageComponent } from './home/index.component';
import { CommonModule } from '@angular/common';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { PatronsPageComponent } from './patrons/index.component';
import { SecretaryPageComponent } from './secretary/index.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
  ],
  declarations: [
    NotFoundPageComponent,
    HomePageComponent,
    PatronsPageComponent,
    SecretaryPageComponent,
  ],
  providers: [],
  exports: [
    NotFoundPageComponent,
    HomePageComponent,
    PatronsPageComponent,
    SecretaryPageComponent,
  ],
})
export class PagesModule {}
