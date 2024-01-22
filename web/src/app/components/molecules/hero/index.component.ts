import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Notice } from '../../../interfaces/notice.interface';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-hero',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class AppHeroComponent {
  notices: Notice[] = [];
  activeNotice = 0;
  mobileQuery!: MediaQueryList;
  deviceAgent!: 'mobile' | 'desktop';

  constructor(
    private readonly apiService: ApiService,
    private readonly mediaMatcher: MediaMatcher
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 496px)');
    this.mobileQueryListener = () => this.setDeviceType();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  private mobileQueryListener: () => void;
  private setDeviceType() {
    this.deviceAgent = this.mobileQuery.matches ? 'mobile' : 'desktop';
  }

  ngOnInit() {
    this.setDeviceType();
    this.notices = this.apiService.notices.getMany(this.deviceAgent);
  }

  ngOnDestroy() {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
  }

  handlePrevNotice() {
    this.activeNotice =
      (this.activeNotice - 1 + this.notices.length) % this.notices.length;
  }

  handleNextNotice() {
    this.activeNotice = (this.activeNotice + 1) % this.notices.length;
  }

  handleSwipe(event: Event) {
    const swipeEvent = event as unknown as { direction: 1 | 2 | 3 | 4 };
    const directions = {
      1: () => {}, // top
      2: () => this.handlePrevNotice(),
      3: () => {}, // bottom
      4: () => this.handleNextNotice(),
    };
    const swipeDirection = directions[swipeEvent.direction];
    swipeDirection();
  }

  handleChangeActiveNotice(current: number) {
    console.log('current: ', current);
    this.activeNotice = current - 1;
  }
}
