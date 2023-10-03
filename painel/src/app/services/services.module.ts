import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [ApiService, AuthService],
  exports: [],
})
export class ServicesModule {}
