import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './homePage.component.html',
  styleUrls: ['./homePage.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  @ViewChild('heroBackground') heroBackground: ElementRef | undefined;
  private images: string[] = [
    'https://files.adiel.dev/paroquia-saobenedito.webp',
    'https://files.adiel.dev/missa.webp',
    'https://files.adiel.dev/sb-altar.webp',
    'https://files.adiel.dev/sb-nave-01.webp',
    'https://files.adiel.dev/sb-fachada.webp',
    'https://files.adiel.dev/missa-02.webp',
    'https://files.adiel.dev/sb-nossa-senhora.webp',
  ];
  private subscription: Subscription | undefined;
  private currentImageIndex: number = Math.floor(
    Math.random() * this.images.length
  );

  constructor(
    private renderer: Renderer2,
    private readonly sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.subscription = interval(15 * 1000).subscribe(() => {
      this.changeHeroBackground();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private changeHeroBackground() {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;

    const imageUrl = `url('${this.images[this.currentImageIndex]}')`;
    this.renderer.setStyle(
      this.heroBackground?.nativeElement,
      'background-image',
      imageUrl
    );
  }

  get bgImage() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      this.images[this.currentImageIndex]
    );
  }
}
