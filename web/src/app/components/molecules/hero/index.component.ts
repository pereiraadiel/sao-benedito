import { Component } from '@angular/core';
import { Notice } from '../../../interfaces/notice.interface';

@Component({
  selector: 'app-hero',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class AppHeroComponent {
  notices: Notice[] = [
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

  activeNotice = 0;

  handleChangeActiveNotice(current: number) {
    console.log('current: ', current);
    this.activeNotice = current - 1;
  }
}
