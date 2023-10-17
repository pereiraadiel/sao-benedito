import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretariaPage.component.html',
  styleUrls: ['./secretariaPage.component.scss'],
})
export class SecretariaPageComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Horários de funcionamento da administração paroquial. Agendamento de batizados, casamentos e outros',
    });
    this.meta.addTag({
      name: 'robots',
      content: 'index, follow',
    });
    this.meta.addTag({
      name: 'keywords',
      content:
        'secretaria são benedito, paróquia são benedito planalto, paróquia são benedito, são benedito uberlândia',
    });
    this.title.setTitle('Secretaria | Paróquia São Benedito');
  }
}
