import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundPageComponent } from './notFound/notFoundPage.component';
import { SignInPageComponent } from './signInPage/index.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { RequestResetPasswordPageComponent } from './requestResetPasswordPage/index.component';
import { ResetPasswordPageComponent } from './resetPasswordPage/index.component';
import { HomePageComponent } from './homePage/index.component';
import { MediasPageComponent } from './mediasPage/index.component';
import { NoticesPageComponent } from './noticesPage/index.component';
import { CleroPageComponent } from './cleroPage/index.component';
import { TimesPageComponent } from './timesPage/index.component';
import { SecretaryPageComponent } from './secretaryPage/index.component';
import { CommunitiesPageComponent } from './communitiesPage/index.component';
import { PatronPageComponent } from './patronPage/index.component';
import { HistoryPageComponent } from './historyPage/index.component';
import { EventsPageComponent } from './eventsPage/index.component';
import { ProjectsPageComponent } from './projectsPage/index.component';

@NgModule({
  declarations: [
    NotFoundPageComponent,
    SignInPageComponent,
    RequestResetPasswordPageComponent,
    ResetPasswordPageComponent,
    HomePageComponent,
    MediasPageComponent,
    NoticesPageComponent,
    CleroPageComponent,
    TimesPageComponent,
    SecretaryPageComponent,
    CommunitiesPageComponent,
    PatronPageComponent,
    HistoryPageComponent,
    EventsPageComponent,
    ProjectsPageComponent,
  ],
  imports: [BrowserModule, ComponentsModule, FormsModule],
  providers: [],
  exports: [
    NotFoundPageComponent,
    SignInPageComponent,
    RequestResetPasswordPageComponent,
    ResetPasswordPageComponent,
    HomePageComponent,
    MediasPageComponent,
    NoticesPageComponent,
    CleroPageComponent,
    TimesPageComponent,
    SecretaryPageComponent,
    CommunitiesPageComponent,
    PatronPageComponent,
    HistoryPageComponent,
    EventsPageComponent,
    ProjectsPageComponent,
  ],
})
export class PagesModule {}
