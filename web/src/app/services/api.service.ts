import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvironmentConstanst } from '../constants/environment.constant';
import { Notice } from '../interfaces/notice.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = EnvironmentConstanst.api.url;

  constructor(private http: HttpClient) {}

  communities = {
    getAll: () => {
      const allCommunities = [
        {
          id: '1',
          name: 'Matriz São Benedito',
          coverUrl: 'https://files.adiel.dev/saobenedito-fachada.webp',
          mapUrl: 'https://maps.app.goo.gl/JYbh2XJt1bDqSFdd6',
          masses: [
            {
              day: 'Domingo',
              time: '7h30  |  9h  |  19h',
            },
            {
              day: 'Quarta-feira',
              time: '19h30',
            },
            {
              day: '1ª Sexta-feira',
              time: '19h30',
            },
            {
              day: '2ª Sexta-feira',
              time: '15h (com enfermos)',
            },
            {
              day: 'Sábado',
              time: '19h',
            },
          ],
          confessions: [
            {
              day: 'Terça à Sexta',
              time: '15h às 17h',
            },
          ],
        },
        {
          id: '2',
          name: "Comunidade São Joaquim & Sant'Ana",
          coverUrl: 'https://files.adiel.dev/sa-fachada-04.webp',
          mapUrl: 'https://maps.app.goo.gl/SyQcSbUutMBnDqFZ9',
          masses: [
            {
              day: 'Domingo',
              time: '10h30  |  17h30',
            },
            {
              day: 'Quinta-feira',
              time: '19h30',
            },
            {
              day: '1ª Sexta-feira',
              time: '19h30',
            },
            {
              day: '2ª Sexta-feira',
              time: '15h (com enfermos)',
            },
          ],
          confessions: [],
        },
      ];
      return allCommunities;
    },

    getOneByName: (name: string) => {},
  };

  notices = {
    getMany: (limit = 5) => {
      const placeholderNotices: Notice[] = [
        {
          alt: 'Fachada da matriz São Benedito',
          src: 'https://files.adiel.dev/saobenedito-fachada.webp',
          id: '',
          finalDate: new Date(),
        },
        {
          alt: 'Acólitas São Benedito',
          src: 'https://files.adiel.dev/acolitas-saobenedito.webp',
          id: '',
          finalDate: new Date(),
        },
        {
          alt: 'Nossa Senhora do Rosário',
          src: 'https://files.adiel.dev/nossa-senhora-rosario.webp',
          id: '',
          finalDate: new Date(),
        },
        {
          alt: "Coroinhas Sant'Ana",
          src: 'https://files.adiel.dev/coroinhas-santana.webp',
          id: '',
          finalDate: new Date(),
        },
      ];

      const notices: Notice[] = [
        // {
        //   alt: 'Novena Nossa Senhora',
        //   src: 'https://files.adiel.dev/missa-encerramento-novena-arte-descrição-2.jpeg',
        //   id: '',
        //   finalDate: new Date(),
        // },
        // {
        //   alt: 'Novena Nossa Senhora',
        //   src: 'https://files.adiel.dev/curso-turibulo-arte-descriçao.jpeg',
        //   id: '',
        //   finalDate: new Date(),
        // },
      ];

      if (notices.length > 0) return notices.slice(0, limit);
      return placeholderNotices;
    },
  };

  user = {};
}
