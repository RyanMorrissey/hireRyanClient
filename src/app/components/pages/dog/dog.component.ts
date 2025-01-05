import { Component } from '@angular/core';
import { ImageGalleryComponent } from '@components/shared/image-gallery/image-gallery.component';

@Component({
  selector: 'app-dog',
  imports: [ImageGalleryComponent],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.less'
})
export class DogComponent {
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
}
