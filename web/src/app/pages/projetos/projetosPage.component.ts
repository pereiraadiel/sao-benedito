import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetosPage.component.html',
  styleUrls: ['./projetosPage.component.scss'],
})
export class ProjetosPageComponent {
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Projetos e reformas das nossa comunidades.',
    });
  }

  title = 'Paróquia São Benedito';
  showModal = true;

  openModal() {
    this.showModal = true;
    document.querySelector('#projetos')?.classList.add('isModalOpen');
  }

  closeModal() {
    this.showModal = false;
    document.querySelector('#projetos')?.classList.remove('isModalOpen');
  }
}
