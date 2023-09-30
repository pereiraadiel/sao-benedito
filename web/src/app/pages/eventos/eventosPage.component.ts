import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { GalleryItem } from '../../interfaces/galleryItem.interface';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventosPage.component.html',
  styleUrls: ['./eventosPage.component.scss'],
})
export class EventosPageComponent {
  evento01Slides: GalleryItem[] = [
    {
      source: 'https://files.adiel.dev/sb-salao-paroquial-telhas.webm',
      type: 'video',
      alternativeText: 'Telhado do salão paroquial',
    },
    {
      source: 'https://files.adiel.dev/sb-tubulação-salao-paroquial.webp',
      type: 'image',
      alternativeText: 'Tubulação do salão paroquial',
    },
    {
      source: 'https://files.adiel.dev/sb-tubulação-fundos-02.webp',
      type: 'image',
      alternativeText: 'Tubulação do pátio',
    },
    {
      source: 'https://files.adiel.dev/sb-reforma-corredor-catequese.webm',
      type: 'video',
      alternativeText: 'Corredor das salas de catequese',
    },
    {
      source: 'https://files.adiel.dev/sb-tubulação-fundos-01.webp',
      type: 'image',
      alternativeText: 'Tubulação do pátio',
    },
  ];

  eventTitle = '';
  eventDescription = '';

  constructor(
    private readonly meta: Meta,
    private readonly apiService: ApiService
  ) {}

  title = 'Paróquia São Benedito';

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Eventos das nossa comunidades.',
    });

    this.apiService.getAllEvents().subscribe((data) => {
      // this.evento01Slides = data;
      console.warn('↓DADOS→', data);
      this.eventTitle = (data as any).title;
      this.eventDescription = (data as any).description;
      console.warn(this.evento01Slides, this.eventDescription, this.eventTitle);
    });
  }
}
