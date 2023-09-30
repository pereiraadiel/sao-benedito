import { DomSanitizer } from '@angular/platform-browser';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent {
  @Input() variant: 'default' | 'footer' = 'default';
  title = 'Paróquia São Benedito';

  constructor(private readonly sanitizer: DomSanitizer) {}

  get brand() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.variant === 'default' ? 'assets/brand.svg' : 'assets/brand-white.svg'
    );
  }

  get logo() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.variant === 'default' ? 'assets/logo.png' : 'assets/logo-stroke.png'
    );
  }
}
