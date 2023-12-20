import { Component } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-patrons-page',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class PatronsPageComponent {
  constructor(
    private readonly sanitizer: DomSanitizer,
    private readonly meta: Meta,
    private readonly title: Title
  ) {}

  ngOnInit() {
    this.meta.updateTag({
      description: '',
    });

    this.title.setTitle('Padroeiros | Pároquia São Benedito');
  }
}
