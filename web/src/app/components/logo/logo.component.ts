import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() variant: 'default' | 'footer' = 'default';
  title = 'Paróquia São Benedito';
}
