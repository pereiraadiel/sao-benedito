import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AtomsModule } from './atoms/atoms.module';
import { MoleculesModule } from './molecules/molecules.module';
import { OrganismsModule } from './organisms/organisms.module';
import { TemplatesModule } from './templates/templates.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  imports: [
    BrowserModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    PagesModule,
  ],
  providers: [],
})
export class ComponentsModule {}
