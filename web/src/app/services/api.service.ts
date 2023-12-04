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
              day: 'Sábado',
              times: ['19h (liturgia domingo)', '\u00A0', '\u00A0'],
            },
            {
              day: 'Domingo',
              times: ['7h30', '9h (com crianças)', '19h'],
            },
            {
              day: 'Quarta-feira',
              times: ['19h30', '\u00A0'],
            },
            {
              day: '1ª Sexta-feira do mês',
              times: ['19h30 (sagrado coração)'],
            },
            {
              day: '2ª Sexta-feira do mês',
              times: ['15h (com enfermos)', '\u00A0'],
            },
          ],
          confessions: [
            {
              day: 'Terça à Sexta',
              times: ['15h às 17h'],
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
              times: ['10h30 (com crianças)', '17h30'],
            },
            {
              day: 'Quinta-feira',
              times: ['19h30', '\u00A0'],
            },
            {
              day: '1ª Sexta-feira do mês',
              times: ['19h30 (sagrado coração)'],
            },
            {
              day: '2ª Sexta-feira do mês',
              times: ['15h (com enfermos)', '\u00A0'],
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
