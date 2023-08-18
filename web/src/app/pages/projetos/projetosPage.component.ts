import { Component } from '@angular/core';
import { DomSanitizer, Meta, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetosPage.component.html',
  styleUrls: ['./projetosPage.component.scss'],
})
export class ProjetosPageComponent {
  salaoParoquial = [
    {
      type: 'video',
      slug: 'sb-salao-paroquial-telhas.mp4',
      text: 'Telhado do Salão Paroquial',
    },
    {
      type: 'video',
      slug: 'sb-rede-fluvial-salao-paroquial.mp4',
      text: 'Rede fluvial do Salão Paroquial',
    },
  ];

  constructor(
    private readonly meta: Meta,
    private readonly sanitizer: DomSanitizer
  ) {
    console.log(this.salaoParoquial);
  }
  private storageUrl = 'https://files.adiel.dev';
  private currentIndex = 0;

  title = 'Paróquia São Benedito';

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Projetos e reformas das nossa comunidades.',
    });
  }

  private sanitize(slug: string): SafeResourceUrl {
    const url = `${this.storageUrl}/${slug}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  get currentUrl(): SafeResourceUrl {
    const item = this.salaoParoquial[this.currentIndex];
    return this.sanitize(item.slug);
  }

  slugUrl(slug: string): SafeResourceUrl {
    return this.sanitize(slug);
  }
}
