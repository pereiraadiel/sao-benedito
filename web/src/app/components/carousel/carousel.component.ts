import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import Swiper from 'swiper';

type Slide = {
  url: string;
  type: 'video' | 'image';
  text: string;
};

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  currentItem: Slide | undefined;

  @Input()
  slides: Slide[] = [];

  private swiper: Swiper | undefined;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      zoom: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  ngOnDestroy(): void {
    if (this.swiper) {
      this.swiper.destroy();
    }
  }

  setCurrentItem(item: Slide) {
    this.currentItem = item;
  }

  urlSanitization(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
