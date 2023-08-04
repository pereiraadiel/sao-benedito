import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-padroeiro',
  templateUrl: './padroeiroPage.component.html',
  styleUrls: ['./padroeiroPage.component.scss'],
})
export class PadroeiroPageComponent {
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Quem é São Benedito? Conheça a história de nossa padroeiro.',
    });
  }

  title = 'Paróquia São Benedito';
}
