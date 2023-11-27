import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
register();

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { TemplatesModule } from './components/templates/templates.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    TemplatesModule,
    ServicesModule,
    // AngularMetaModule.forRoot(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
