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
      url: 'juUt-rN5CVo',
      text: 'Video sobre o salao paroquial',
      thumbnail: 'http://i3.ytimg.com/vi/juUt-rN5CVo/maxresdefault.jpg',
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/sete/720/720',
      text: 'Foto sobre o salao paroquial',
      thumbnail: 'https://picsum.photos/seed/sete/720/720',
    },
    {
      type: 'video',
      url: 'YHNuhcGhDRg',
      text: 'Video sobre o salao paroquial',
      thumbnail: 'http://i3.ytimg.com/vi/YHNuhcGhDRg/maxresdefault.jpg',
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/1024/720/720',
      text: 'Foto sobre o salao paroquial',
      thumbnail: 'https://picsum.photos/seed/1024/720/720',
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/arraial/720/720',
      text: 'Foto sobre o salao paroquial',
      thumbnail: 'https://picsum.photos/seed/arraial/720/720',
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/festa/720/720',
      text: 'Foto sobre o salao paroquial',
      thumbnail: 'https://picsum.photos/seed/festa/720/720',
    },
    {
      type: 'image',
      url: 'https://picsum.photos/seed/mania/720/720',
      text: 'Foto sobre o salao paroquial',
      thumbnail: 'https://picsum.photos/seed/mania/720/720',
    },
  ];
  constructor(
    private readonly meta: Meta,
    private readonly sanitizer: DomSanitizer
  ) {
    console.log(this.salaoParoquial);
  }
  title = 'Paróquia São Benedito';
  showModal = false;
  showVideo = false;
  showImage = false;

  currentImageUrl = this.salaoParoquial[0].url;
  currentImageAlt = this.salaoParoquial[0].text;
  currentVideoId = this.salaoParoquial[0].url;
  currentVideoUrl = '';
  currentIndex = 0;

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Projetos e reformas das nossa comunidades.',
    });
    this.loadCurrent();
  }

  loadCurrent() {
    const current = this.salaoParoquial[this.currentIndex];

    if (current.type === 'image') {
      this.currentImageAlt = current.text;
      this.currentImageUrl = current.url;
      this.showImage = true;
      this.showVideo = false;
    } else {
      this.currentVideoId = current.url;
      this.showVideo = true;
      this.showImage = false;
    }
  }

  get videoUrl(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.currentVideoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  get imageUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentImageUrl);
  }

  goToNext() {
    if (this.currentIndex < this.salaoParoquial.length - 1) {
      this.currentIndex++;
      this.loadCurrent();
    }
  }
  goToPrevious() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.loadCurrent();
    }
  }

  openModal(index = 0) {
    this.currentIndex = index;
    this.showModal = true;
    this.loadCurrent();
    document.querySelector('#projetos')?.classList.add('isModalOpen');
  }

  closeModal() {
    this.showModal = false;
    document.querySelector('#projetos')?.classList.remove('isModalOpen');
  }
}
