import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-head',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CardHeadComponent {
  @Input() title!: string;
  @Input() description?: string;
}
