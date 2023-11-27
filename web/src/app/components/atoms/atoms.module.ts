import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/index.component';
import { FooterComponent } from './footer/index.component';
import { PaginationComponent } from './pagination/index.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PaginationComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [HeaderComponent, FooterComponent, PaginationComponent],
})
export class AtomsModule {}
