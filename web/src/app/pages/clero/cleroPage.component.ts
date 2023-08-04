import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-clero',
  templateUrl: './cleroPage.component.html',
  styleUrls: ['./cleroPage.component.scss'],
})
export class CleroPageComponent {
  constructor(private readonly meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'Conheça os sacerdotes e diáconos de nossa paróquia.',
    });
  }

  title = 'Paróquia São Benedito';
}
