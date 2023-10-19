import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Projects } from '../../services/contracts/projects.contract';
import { Community } from '../../services/contracts/communities.contract';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetosPage.component.html',
  styleUrls: ['./projetosPage.component.scss'],
})
export class ProjetosPageComponent {
  projects: Projects = [];

  constructor(private readonly meta: Meta, private readonly title: Title) {
    this.projects = this.getProjects();
    this.projects = [];
  }

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Veja todos os projetos de melhorias nas estruturas físicas das comunidades de nossa paróquia!',
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

  getProjects(): Projects {
    return [
      {
        id: '',
        community: {
          name: 'Matriz - Paróquia São Benedito',
        } as Community,
        description: 'Descrição do projeto teste',
        title: 'Projeto de teste',
        finishedIn: new Date(),
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
