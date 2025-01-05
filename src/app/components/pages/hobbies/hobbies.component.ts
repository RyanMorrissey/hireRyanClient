import { Component } from '@angular/core';
import { ImageGalleryComponent } from '@components/shared/image-gallery/image-gallery.component';

@Component({
  selector: 'app-hobbies',
  imports: [ImageGalleryComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.less'
})
export class HobbiesComponent {
  galleryImages: string[] = [
      'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
            'assets/images/dog.png',
    ];






  /* selectedImage: string | null = null;

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  } */
}
