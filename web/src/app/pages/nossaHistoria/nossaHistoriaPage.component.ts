import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nossa-historia',
  templateUrl: './nossaHistoriaPage.component.html',
  styleUrls: ['./nossaHistoriaPage.component.scss'],
})
export class NossaHistoriaPageComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Conheça a historia da nossa paróquia!',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'noindex, nofollow',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'história são benedito, paróquia são benedito planalto história, paróquia são benedito história, são benedito uberlândia',
    });
    this.title.setTitle('História | Paróquia São Benedito');
  }
}
