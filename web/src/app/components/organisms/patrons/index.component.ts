import { Component } from '@angular/core';
import { Community } from '../../../interfaces/community.interface';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-patrons',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class PatronsComponent {
  communities!: Community[];
  title!: string;

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.communities = this.apiService.communities.getAll();
    this.title = 'Horários de celebrações nas comunidades';
  }
}
