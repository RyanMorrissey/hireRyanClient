import { Component, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.less'
})
export class ImageGalleryComponent implements OnInit {
  galleryImages = input.required<string[]>();
  loadedImages: string[] = []

  selectedImage: string | null = null;
  currentImage: number = 0
  loadMoreDisabled: boolean = false

  ngOnInit(): void {
      console.log('init')
      this.loadMore()
  }

  loadMore(): void {
    for (let i = 0; i < 10; i++) {
      this.loadedImages.push(this.galleryImages()[this.currentImage])
      this.currentImage++
      // add until we reach the end
      if (this.currentImage == this.galleryImages().length) {
        this.loadMoreDisabled = true
        break;
      }
    }
  }

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
