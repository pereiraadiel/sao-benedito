import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ModalComponent,
    CarouselComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ModalComponent,
    CarouselComponent,
  ],
})
export class ComponentsModule {}
