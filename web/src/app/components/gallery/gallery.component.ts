import { Component, Input, OnInit } from '@angular/core';
import { GalleryItem } from '../../interfaces/galleryItem.interface';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() data: GalleryItem[] = [];
  @Input() showCount = false;
  previewItem = false;
  showMask = false;
  currentLightboxItem: GalleryItem = this.data[0];
  currentIndex = 0;
  totalItemsCount = this.data.length;
  controls = true;

  constructor() {}

  ngOnInit(): void {
    this.totalItemsCount = this.data.length;
  }

  onPreviewItem(index: number) {
    this.showMask = true;
    this.previewItem = true;
    this.currentIndex = index;
    this.currentLightboxItem = this.data[this.currentIndex];
  }

  onClosePreviewItem() {
    this.previewItem = false;
    this.showMask = false;
  }

  onLoadNextPreviewItem() {
    this.currentIndex = (this.currentIndex + 1) % this.totalItemsCount;
    this.currentLightboxItem = this.data[this.currentIndex];
  }

  onLoadPreviousPreviewItem() {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalItemsCount) % this.totalItemsCount;
    this.currentLightboxItem = this.data[this.currentIndex];
  }
}
