import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-comunidades',
  templateUrl: './comunidadesPage.component.html',
  styleUrls: ['./comunidadesPage.component.scss'],
})
export class ComunidadesPageComponent {
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'História, horário de funcionamento e localização das comunidades da paróquia',
    });
  }

  title = 'Paróquia São Benedito';
}
