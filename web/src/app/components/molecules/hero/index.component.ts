import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import * as Hammer from 'hammerjs';
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
  private hammerManager!: HammerManager;

  constructor(
    private readonly apiService: ApiService,
    private readonly mediaMatcher: MediaMatcher
  ) {
    this.mobileQuery = this.mediaMatcher.matchMedia('(max-width: 496px)');
    this.mobileQueryListener = () => this.setDeviceType();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
    this.setupHammer();
  }

  private mobileQueryListener: () => void;
  private setDeviceType() {
    this.deviceAgent = this.mobileQuery.matches ? 'mobile' : 'desktop';
  }

  private setupHammer() {
    this.hammerManager = new Hammer.Manager(document.body);
    const swipe = new Hammer.Swipe({ direction: Hammer.DIRECTION_HORIZONTAL });
    this.hammerManager.add(swipe);

    this.hammerManager.on('swipe', (event: HammerInput) => {
      if (event.offsetDirection === Hammer.DIRECTION_LEFT) {
        this.handlePrevNotice();
      } else if (event.offsetDirection === Hammer.DIRECTION_RIGHT) {
        this.handleNextNotice();
      }
    });
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

  handleChangeActiveNotice(current: number) {
    console.log('current: ', current);
    this.activeNotice = current - 1;
  }
}
