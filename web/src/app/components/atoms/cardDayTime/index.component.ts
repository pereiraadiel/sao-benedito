import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-day-time',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CardDayTimeComponent {
  @Input() day!: string;
  @Input() times!: string[];
}
