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
    getMany: (deviceAgent: 'mobile' | 'desktop' = 'mobile', limit = 5) => {
      const placeholderNotices: Notice[] = [
        {
          alt: 'Fachada da matriz São Benedito',
          src: 'https://files.adiel.dev/saobenedito-fachada.webp',
          id: '',
          deviceAgent: 'desktop',
          finalDate: new Date(),
        },
        {
          alt: 'Acólitas São Benedito',
          src: 'https://files.adiel.dev/acolitas-saobenedito.webp',
          id: '',
          deviceAgent: 'desktop',
          finalDate: new Date(),
        },
        {
          alt: 'Nossa Senhora do Rosário',
          src: 'https://files.adiel.dev/nossa-senhora-rosario.webp',
          id: '',
          deviceAgent: 'desktop',
          finalDate: new Date(),
        },
        {
          alt: "Coroinhas Sant'Ana",
          src: 'https://files.adiel.dev/coroinhas-santana.webp',
          deviceAgent: 'desktop',
          id: '',
          finalDate: new Date(),
        },
      ];

      const notices: Notice[] = [
        {
          alt: 'Curso de Coroinhas 2024',
          src: 'https://files.adiel.dev/curso-de-coroinhas-2024.png',
          id: '1',
          deviceAgent: 'desktop',
          finalDate: new Date(),
        },
        {
          alt: 'Inscrições Catequese 2024',
          src: 'https://files.adiel.dev/inscricoes-catequese-2024.png',
          id: '3',
          deviceAgent: 'desktop',
          finalDate: new Date(),
        },
        {
          alt: 'Show de Premios 2024',
          src: 'https://files.adiel.dev/show-premios-fevereiro-2024.png',
          id: '4',
          deviceAgent: 'desktop',
          finalDate: new Date(),
        },
        {
          alt: "Galinhada Sant'Ana 2024",
          src: 'https://files.adiel.dev/galinhada-santana-fevereiro-2024.png',
          id: '5',
          deviceAgent: 'desktop',
          finalDate: new Date(),
        },
        {
          alt: 'Curso de Coroinhas 2024',
          src: 'https://files.adiel.dev/curso-de-coroinhas-2024-m.png',
          id: '1',
          deviceAgent: 'mobile',
          finalDate: new Date(),
        },
        {
          alt: 'Inscrições Catequese 2024',
          src: 'https://files.adiel.dev/inscricoes-catequese-2024-m.png',
          id: '3',
          deviceAgent: 'mobile',
          finalDate: new Date(),
        },
        {
          alt: 'Show de Premios 2024',
          src: 'https://files.adiel.dev/show-premios-fevereiro-2024-m.png',
          id: '4',
          deviceAgent: 'mobile',
          finalDate: new Date(),
        },
        {
          alt: "Galinhada Sant'Ana 2024",
          src: 'https://files.adiel.dev/galinhada-santana-fevereiro-2024-m.png',
          id: '5',
          deviceAgent: 'mobile',
          finalDate: new Date(),
        },
      ];

      const deviceNotices = notices.filter(
        (notice) => notice.deviceAgent === deviceAgent
      );

      if (deviceNotices.length > 0) return deviceNotices.slice(0, limit);
      return placeholderNotices.filter(
        (notice) => notice.deviceAgent === deviceAgent
      );
    },
  };

  user = {};
}
