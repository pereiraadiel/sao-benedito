import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent],
  imports: [BrowserModule],
  providers: [],
  exports: [HeaderComponent, FooterComponent, LogoComponent],
})
export class ComponentsModule {}
