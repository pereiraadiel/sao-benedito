import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-nossa-historia',
  templateUrl: './nossaHistoriaPage.component.html',
  styleUrls: ['./nossaHistoriaPage.component.scss'],
})
export class NossaHistoriaPageComponent {
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Conheça a história da paróquia São Benedito.',
    });
  }

  title = 'Paróquia São Benedito';
}
