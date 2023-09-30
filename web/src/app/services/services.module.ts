import { NgModule } from '@angular/core';
import { ApiService } from './api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [ApiService],
  exports: [],
})
export class ServicesModule {}
