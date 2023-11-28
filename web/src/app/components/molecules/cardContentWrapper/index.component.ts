import { Component, Input } from '@angular/core';

type Celebration = {
  day: string;
  time: string;
};

@Component({
  selector: 'app-card-content-wrapper',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CardContentWrapperComponent {
  @Input() variant!: 'patron' | 'celebration-time';

  @Input() title?: string;
  @Input() content?: string;
  @Input() masses?: Celebration[];
  @Input() confessions?: Celebration[];
}
