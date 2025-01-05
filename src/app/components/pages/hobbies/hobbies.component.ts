import { Component } from '@angular/core';
import { ImageGalleryComponent } from '@components/shared/image-gallery/image-gallery.component';

@Component({
  selector: 'app-hobbies',
  imports: [ImageGalleryComponent],
  templateUrl: './hobbies.component.html',
  styleUrl: './hobbies.component.less'
})
export class HobbiesComponent {
  // let me just say I hate this, I think reading the folder and looping through each content would be infinitely easier
  // but the things I am finding seem like a lot more work than its worth.  I've got about 40 images so im just just gonna
  // brute force this.  Gimli will be easier.
  galleryImages: string[] = [
      'assets/images/hobby/display1.jpg',
      'assets/images/hobby/display2.jpg',
      'assets/images/hobby/display3.jpg',
      'assets/images/hobby/bane_unpainted.jpg',
      'assets/images/hobby/bane_painted.jpg',
      'assets/images/hobby/bane_painted2.jpg',
      'assets/images/hobby/display4.jpg',
      'assets/images/hobby/display5.jpg',
      'assets/images/hobby/display6.jpg',
      'assets/images/hobby/warhammer_misc1.jpg',
      'assets/images/hobby/warhammer_misc2.jpg',
      'assets/images/hobby/warhammer_misc3.jpg',
      'assets/images/hobby/display7.jpg',
      'assets/images/hobby/display8.jpg',
      'assets/images/hobby/display9.jpg',
      'assets/images/hobby/display10.jpg',
      'assets/images/hobby/dizzy_unpainted.jpg',
      'assets/images/hobby/dizzy_painted1.jpg',
      'assets/images/hobby/dizzy_complete.jpg',
      'assets/images/hobby/warhammer_misc4.jpg',
      'assets/images/hobby/warhammer_misc5.jpg',
      'assets/images/hobby/warhammer_misc6.jpg',
      'assets/images/hobby/graboid_unpainted.jpg',
      'assets/images/hobby/graboid_painted.jpg',
      'assets/images/hobby/graboid_painted2.jpg',
      'assets/images/hobby/guilliman_unpainted1.jpg',
      'assets/images/hobby/guilliman_unpainted2.jpg',
      'assets/images/hobby/guilliman_unpainted3.jpg',
      'assets/images/hobby/guilliman_painted.jpg',
      'assets/images/hobby/joker_printing.jpg',
      'assets/images/hobby/joker_unpainted.jpg',
      'assets/images/hobby/joker_complete.jpg',
      'assets/images/hobby/mm1.jpg',
      'assets/images/hobby/mm2.jpg',
      'assets/images/hobby/oddish_printing.jpg',
      'assets/images/hobby/oddish_painted1.jpg',
      'assets/images/hobby/misc_statues1.jpg',
      'assets/images/hobby/hydralisk.jpg',
      'assets/images/hobby/eye_target.jpg',
      'assets/images/hobby/chozo_painted.jpg',
      'assets/images/hobby/warhammer_misc7.jpg',
      'assets/images/hobby/warhammer_misc8.jpg',
      'assets/images/hobby/warhammer_misc9.jpg',
    ];






  /* selectedImage: string | null = null;

  openImage(imageUrl: string): void {
    this.selectedImage = imageUrl;
  }

  closeImage(): void {
    this.selectedImage = null;
  } */
}
