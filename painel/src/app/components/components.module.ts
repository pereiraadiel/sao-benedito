import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { ModalComponent } from './modal/modal.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidebarComponent } from './sidebar/index.component';
import { LayoutComponent } from './layout/index.component';
import { InputComponent } from './input/index.component';
import { ButtonComponent } from './button/index.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ModalComponent,
    GalleryComponent,
    SidebarComponent,
    LayoutComponent,
    InputComponent,
    ButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ModalComponent,
    GalleryComponent,
    SidebarComponent,
    LayoutComponent,
    InputComponent,
    ButtonComponent,
  ],
})
export class ComponentsModule {}
