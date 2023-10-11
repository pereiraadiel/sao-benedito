import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
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
      id: '1',
      title: 'Missa de Encerramento da Novena',
      description:
        'A nossa missa em honra a Nossa Senhora Aparecida está se aproximando e contamos com a presença de todos os fiéis da Paróquia São Benedito!\
        \
        Teremos missa às 7h30, 9h00 (voltada para os catequizandos) e 18h00, finalizando com as barraquinhas.\
        \
        Escolha o melhor horário e venha celebrar conosco!',
      finalDate: new Date('2023-10-12T19:00:00'),
      medias: [
        {
          id: '1',
          alternativeText: 'Foto com arte da missa de encerramento da novena',
          source: 'https://files.adiel.dev/missa-encerramento-novena-arte.jpeg',
          type: 'image',
        },
        {
          id: '2',
          alternativeText:
            'Foto com informações da missa de encerramento da novena',
          source:
            'https://files.adiel.dev/missa-encerramento-novena-descrição.jpeg',
          type: 'image',
        },
      ],
    },
    {
      id: '2',
      title: 'Curso de Turibulo',
      description: 'Curso de turibulo para todos os coroinhas da paróquia!',
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
    private readonly apiService: ApiService
  ) {}

  title = 'Paróquia São Benedito';
  today = new Date();

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Avisos e Comunicados das nossas comunidades.',
    });

    console.warn(this.notices);
  }
}
