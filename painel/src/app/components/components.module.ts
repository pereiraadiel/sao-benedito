import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';
import { ModalComponent } from './modal/modal.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SidebarComponent } from './sidebar/index.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    ModalComponent,
    GalleryComponent,
    SidebarComponent,
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
  ],
})
export class ComponentsModule {}
