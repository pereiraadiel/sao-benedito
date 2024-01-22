import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppTemplateComponent } from './app/index.component';
import { AtomsModule } from '../atoms/atoms.module';

@NgModule({
  declarations: [AppTemplateComponent],
  imports: [BrowserModule, AtomsModule,],
  providers: [],
  exports: [AppTemplateComponent],
})
export class TemplatesModule {}
