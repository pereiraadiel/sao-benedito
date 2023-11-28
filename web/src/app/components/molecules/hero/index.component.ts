import { Component } from '@angular/core';
import { Notice } from '../../../interfaces/notice.interface';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class AppHeroComponent {
  notices: Notice[] = [];
  activeNotice = 0;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.notices = this.apiService.notices.getMany();
  }

  handleChangeActiveNotice(current: number) {
    console.log('current: ', current);
    this.activeNotice = current - 1;
  }
}
