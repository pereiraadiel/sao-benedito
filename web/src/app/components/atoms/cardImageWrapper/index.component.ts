import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-image-wrapper',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CardImageWrapperComponent {
  @Input() src!: string;
  @Input() alt?: string;
  @Input() variant?: 'full-height';
}
