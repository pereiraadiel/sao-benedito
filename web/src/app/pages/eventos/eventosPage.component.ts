import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
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
    private readonly title: Title,
    private readonly apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Eventos, festas, quermesses e barraquinhas da paróquia São Benedito',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'sao benedito barraquinhas, sao benedito eventos, paróquia são benedito quermesse, quermesse, barraquinhas, festas são benedito',
    });
    this.title.setTitle('Eventos | Paróquia São Benedito');

    this.apiService.communities
      .getAll()
      .then((response) => {
        this.eventTitle = response.data[0].name;
        this.eventDescription = response.data[0].description;
      })
      .catch((error) => {
        console.error(error);
        // mostrar um modal com informações do erro para que o usuario possa
        // saber qual erro ocorreu e tomar a decisão de acordo
      });
  }
}
