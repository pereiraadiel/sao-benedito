import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { Events } from '../../services/contracts/events.contract';
import { Community } from '../../services/contracts/communities.contract';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventosPage.component.html',
  styleUrls: ['./eventosPage.component.scss'],
})
export class EventosPageComponent {
  events: Events = [];

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly apiService: ApiService
  ) {
    this.events = this.getEvents();
    this.events = [];
  }

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
  }

  getEvents(): Events {
    // chamar a apiService.events.getAll
    return [
      {
        id: '',
        title: 'Evento teste',
        description: 'descrição sobre o evento teste',
        initialDate: new Date(),
        finalDate: new Date(),
        community: {
          name: 'Matriz - Paróquia São Benedito',
        } as Community,
        medias: [
          {
            id: '',
            source: 'https://files.adiel.dev/sb-tubulação-fundos-02.webp',
            alternativeText: 'Tubulação do pátio',
            type: 'image',
          },
          {
            id: '',
            source: 'https://files.adiel.dev/sb-tubulação-salao-paroquial.webp',
            alternativeText: 'Tubulação do pátio',
            type: 'image',
          },
        ],
      },
    ];
  }
}
