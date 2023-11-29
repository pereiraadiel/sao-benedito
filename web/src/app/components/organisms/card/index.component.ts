import { Component, Input } from '@angular/core';
import { Community } from '../../../interfaces/community.interface';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-card',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class CardComponent {
  @Input()
  community!: Community;
  title!: string;

  constructor(private readonly sanitizer: DomSanitizer) {
    console.log(this.community);
    this.title = '';
  }

  ngOnInit() {
    this.title = this.community.name;
  }

  sanitizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
