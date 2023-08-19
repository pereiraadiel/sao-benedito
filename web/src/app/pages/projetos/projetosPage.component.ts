import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

type Slide = {
  url: string;
  type: 'video' | 'image';
  text: string;
};
@Component({
  selector: 'app-projetos',
  templateUrl: './projetosPage.component.html',
  styleUrls: ['./projetosPage.component.scss'],
})
export class ProjetosPageComponent {
  salaoParoquialSlides: Slide[] = [
    {
      url: 'https://files.adiel.dev/sb-salao-paroquial-telhas.mp4',
      type: 'video',
      text: 'Telhado do salão paroquial',
    },
    {
      url: 'https://files.adiel.dev/sb-reforma-corredor-catequese.mp4',
      type: 'video',
      text: 'Corredor das salas de catequese',
    },
    {
      url: 'https://files.adiel.dev/sb-tubulação-salao-paroquial.jpeg',
      type: 'image',
      text: 'Tubulação do salão paroquial',
    },
    {
      url: 'https://files.adiel.dev/sb-tubulação-fundos-02.jpeg',
      type: 'image',
      text: 'Tubulação do pátio',
    },
    {
      url: 'https://files.adiel.dev/sb-tubulação-fundos-01.jpeg',
      type: 'image',
      text: 'Tubulação do pátio',
    },
  ];

  constructor(private readonly meta: Meta) {}

  title = 'Paróquia São Benedito';

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Projetos e reformas das nossa comunidades.',
    });
  }
}
