import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
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
    'https://files.adiel.dev/sb-fachada.webp',
    'https://files.adiel.dev/sa-fachada-02.webp',
    'https://files.adiel.dev/missa.webp',
    'https://files.adiel.dev/missa-02.webp',
    'https://files.adiel.dev/sb-altar.webp',
    'https://files.adiel.dev/sb-nave-01.webp',
    'https://files.adiel.dev/sb-nossa-senhora.webp',
    'https://files.adiel.dev/sa-fachada-01.webp',
    'https://files.adiel.dev/sa-fachada-04.webp',
    'https://files.adiel.dev/sa-fachada-03.webp',
    'https://files.adiel.dev/sa-corinhas.webp',
    'https://files.adiel.dev/acolita-coroinhas.webp',
    'https://files.adiel.dev/ministros.webp',
  ];
  private subscription: Subscription | undefined;
  private currentImageIndex: number = Math.floor(
    Math.random() * this.images.length
  );

  constructor(
    private renderer: Renderer2,
    private readonly sanitizer: DomSanitizer,
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit() {
    this.subscription = interval(15 * 1000).subscribe(() => {
      this.changeHeroBackground();
    });
    this.meta.updateTag({
      name: 'description',
      content: 'Paróquia São Benedito | Diocese de Uberlândia-MG',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });
    this.title.setTitle('Paróquia São Benedito');
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
