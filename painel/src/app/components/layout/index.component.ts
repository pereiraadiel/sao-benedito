import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class LayoutComponent {
  @Input() title = '';
}
