import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-padroeiro',
  templateUrl: './padroeiroPage.component.html',
  styleUrls: ['./padroeiroPage.component.scss'],
})
export class PadroeiroPageComponent {
  constructor(private readonly meta: Meta, private readonly title: Title) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Conheça a história do nosso padroeiro São Benedito e aumente sua admiração por este grande santo!',
    });
    this.meta.updateTag({
      name: 'robots',
      content: 'index, follow',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'padroeiro são benedito, paróquia são benedito planalto historia, paróquia são benedito história, são benedito uberlândia, são benedito história',
    });
    this.title.setTitle('Padroeiro | Paróquia São Benedito');
  }
}
