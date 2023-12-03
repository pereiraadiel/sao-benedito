import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class HeaderComponent {
  title = 'Paróquia São Benedito';
  showMobileNavigation = false;

  toggleShowMobileNavigation() {
    this.showMobileNavigation = !this.showMobileNavigation;
  }

  closeMobileNavigation() {
    this.showMobileNavigation = !this.showMobileNavigation;
  }
}
