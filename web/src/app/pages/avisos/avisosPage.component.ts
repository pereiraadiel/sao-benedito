import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ApiService } from '../../services/api.service';
import { Notice } from '../../interfaces/notice.interface';
import * as moment from 'moment';

function getNextSunday() {
  const today = moment();
  const currentDay = today.day();
  const daysToNextSunday = 7 - currentDay;
  const nextSunday = moment(today).add(daysToNextSunday, 'days');
  return nextSunday;
}

@Component({
  selector: 'app-avisos',
  templateUrl: './avisosPage.component.html',
  styleUrls: ['./avisosPage.component.scss'],
})
export class AvisosPageComponent {
  notices: Notice[] = [];

  weekNotices: Notice[] = [];

  constructor(
    private readonly meta: Meta,
    private readonly title: Title,
    private readonly apiService: ApiService
  ) {
    this.weekNotices = this.getWeekNotices();
  }

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
    this.notices = this.getNotices();
    this.weekNotices = this.getWeekNotices();
  }

  getWeekNotices(): Notice[] {
    const nextSunday = getNextSunday();
    const today = moment();
    return this.notices.filter(
      (notice) =>
        moment(notice.finalDate).isSameOrBefore(nextSunday) &&
        moment(notice.finalDate).isSameOrAfter(today)
    );
  }

  getNotices(): Notice[] {
    return [
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
  }
}
