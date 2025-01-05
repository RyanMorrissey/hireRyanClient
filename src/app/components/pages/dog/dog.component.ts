import { Component } from '@angular/core';
import { ImageGalleryComponent } from '@components/shared/image-gallery/image-gallery.component';

@Component({
  selector: 'app-dog',
  imports: [ImageGalleryComponent],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.less'
})
export class DogComponent {
  galleryImages = Array.from({ length: 25 }, (_, index) => `assets/images/gimli/gimli${index + 1}.jpg`)
}
