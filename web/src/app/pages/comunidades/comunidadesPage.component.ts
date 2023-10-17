import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidadesPage.component.html',
  styleUrls: ['./comunidadesPage.component.scss'],
})
export class ComunidadesPageComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Informações relevantes sobre as comunidades da paróquia São Benedito, como localização, horários de funcionamento, entre outros',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'paróquia são benedito uberlandia, sao benedito uberlandia, paroquia sao benedito, endereço sao benedito uberlandia',
    });
    this.title.setTitle('Comunidades | Paróquia São Benedito');
  }
}
