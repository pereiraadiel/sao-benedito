import { Component } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class HomePageComponent {
  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit() {
    this.meta.updateTag({
      description: '',
    });

    this.title.setTitle('Pároquia São Benedito | Diocese de Uberlândia-MG');
  }
}
