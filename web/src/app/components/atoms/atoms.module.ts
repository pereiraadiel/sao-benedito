import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/index.component';
import { FooterComponent } from './footer/index.component';
import { PaginationComponent } from './pagination/index.component';
import { CardHeadComponent } from './cardHead/index.component';
import { CardImageWrapperComponent } from './cardImageWrapper/index.component';
import { CardDayTimeComponent } from './cardDayTime/index.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    CardHeadComponent,
    CardImageWrapperComponent,
    CardDayTimeComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    PaginationComponent,
    CardHeadComponent,
    CardImageWrapperComponent,
    CardDayTimeComponent,
  ],
})
export class AtomsModule {}
