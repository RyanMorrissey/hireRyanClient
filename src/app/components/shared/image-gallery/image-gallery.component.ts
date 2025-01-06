import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.less']
})
export class ImageGalleryComponent implements OnInit {
  galleryImages = input.required<string[]>();
  loadedImages: string[] = [];
  selectedImage: string | null = null;
  currentImageIndex: number = 0;
  showLoadMore: boolean = false;

  ngOnInit(): void {
    this.loadMore();
  }

  async loadMore() {
    this.showLoadMore = false;

    for (let i = 0; i < 10; i++) {
      if (this.currentImageIndex >= this.galleryImages().length) {
        break;
      }

      const imageUrl = this.galleryImages()[this.currentImageIndex];
      await this.preloadImage(imageUrl);
      this.loadedImages.push(imageUrl);

      this.currentImageIndex++;
    }

    if (this.currentImageIndex < this.galleryImages().length) {
      this.showLoadMore = true;
    }
  }

  // I ran into an issue of images loading strangely rather than just popping in
  // This lets me load them one at a time and fully
  preloadImage(url: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
      img.onerror = () => reject();
    });
  }

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
