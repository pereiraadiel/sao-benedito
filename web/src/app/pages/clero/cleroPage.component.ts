import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-clero',
  templateUrl: './cleroPage.component.html',
  styleUrls: ['./cleroPage.component.scss'],
})
export class CleroPageComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Clero da paróquia São Benedito · Pároco padre Joaquim Porto · Vigário padre Marcos Borges · Diácono Jerônimo Ferreira',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'padre joaquim porto, padre marcos borges, diacono jeronimo gomes ferreira, paroquia sao benedito, clero',
    });
    this.title.setTitle('Clero | Paróquia São Benedito');
  }
}
