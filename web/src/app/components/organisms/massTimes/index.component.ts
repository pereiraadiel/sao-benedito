import { Component } from '@angular/core';
import { Community } from '../../../interfaces/community.interface';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-mass-times',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class MassTimesComponent {
  communities!: Community[];

  constructor(private readonly apiService: ApiService) {}

  ngOnInit() {
    this.communities = this.apiService.communities.getAll();
  }
}
