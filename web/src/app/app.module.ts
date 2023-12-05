import { NgModule } from '@angular/core';
import {
  BrowserModule,
  HAMMER_GESTURE_CONFIG,
} from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';
register();
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ServicesModule } from './services/services.module';
import { TemplatesModule } from './components/templates/templates.module';
import { AppHammerConfig } from './config/appHammer.config';

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
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: AppHammerConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
