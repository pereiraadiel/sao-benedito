import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GalleryItem } from '../../interfaces/galleryItem.interface';
import { ApiService } from '../../services/api.service';
import { Notice } from '../../interfaces/notice.interface';

@Component({
  selector: 'app-avisos',
  templateUrl: './avisosPage.component.html',
  styleUrls: ['./avisosPage.component.scss'],
})
export class AvisosPageComponent {
  notices: Notice[] = [
    {
      id: '2',
      title: 'Curso de Turíbulo',
      description: 'Curso de turíbulo para todos os coroinhas da paróquia!',
      finalDate: new Date('2023-10-21T14:00:00'),
      medias: [
        {
          id: '1',
          alternativeText: 'Foto com arte do curso de turibulo',
          source: 'https://files.adiel.dev/curso-turibulo-arte.jpeg',
          type: 'image',
        },
        {
          id: '2',
          alternativeText: 'Foto com informações do curso de turibulo',
          source: 'https://files.adiel.dev/curso-turibulo-descricao.jpeg',
          type: 'image',
        },
      ],
    },
  ];

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly apiService: ApiService
  ) {}

  today = new Date();

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Avisos e comunicados das comunidades da paróquia São Benedito Uberlândia.',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow',
    });
    this.title.setTitle('Avisos | Paróquia São Benedito');
  }
}
