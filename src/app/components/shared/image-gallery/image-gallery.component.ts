import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-image-gallery',
  imports: [CommonModule],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.less'
})
export class ImageGalleryComponent {
  galleryImages = input.required<string[]>();

  selectedImage: string | null = null;

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  }
}
