import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class HomeCardComponent {
  @Input()
  title: string = '';
  @Input()
  description: string = '';
  @Input()
  asset: string = '';
  @Input()
  link: string = '';
}
