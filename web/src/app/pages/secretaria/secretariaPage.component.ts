import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-secretaria',
  templateUrl: './secretariaPage.component.html',
  styleUrls: ['./secretariaPage.component.scss'],
})
export class SecretariaPageComponent {
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Horários de funcionamento da administração paroquial.',
    });
  }

  title = 'Paróquia São Benedito';
}
