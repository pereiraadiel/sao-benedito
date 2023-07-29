import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-clero-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CleroCardComponent {
  @Input()
  title: string = '';
  @Input()
  name: string = '';
  @Input()
  photo: string = '';
  @Input()
  role: string = '';
  @Input()
  slogan: string = '';
  @Input()
  resume: string = '';
}
