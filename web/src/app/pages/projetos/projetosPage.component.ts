import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { GalleryItem } from '../../interfaces/galleryItem.interface';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetosPage.component.html',
  styleUrls: ['./projetosPage.component.scss'],
})
export class ProjetosPageComponent {
  salaoParoquialSlides: GalleryItem[] = [
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

  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Veja o progresso dos projetos e obras nas nossas comunidades',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'obras são benedito, paróquia são benedito planalto obras, paróquia são benedito projetos, são benedito uberlândia',
    });
    this.title.setTitle('Projetos | Paróquia São Benedito');
  }
}
