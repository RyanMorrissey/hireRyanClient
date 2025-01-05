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
      'assets/images/hobby/display1-min.jpg',
      'assets/images/hobby/display2-min.jpg',
      'assets/images/hobby/display3-min.jpg',
      'assets/images/hobby/bane_unpainted-min.jpg',
      'assets/images/hobby/bane_painted-min.jpg',
      'assets/images/hobby/bane_painted2-min.jpg',
      'assets/images/hobby/display4-min.jpg',
      'assets/images/hobby/display5-min.jpg',
      'assets/images/hobby/display6-min.jpg',
      'assets/images/hobby/warhammer_misc1-min.jpg',
      'assets/images/hobby/warhammer_misc2-min.jpg',
      'assets/images/hobby/warhammer_misc3-min.jpg',
      'assets/images/hobby/display7-min.jpg',
      'assets/images/hobby/display8-min.jpg',
      'assets/images/hobby/display9-min.jpg',
      'assets/images/hobby/display10-min.jpg',
      'assets/images/hobby/dizzy_unpainted-min.jpg',
      'assets/images/hobby/dizzy_painted1-min.jpg',
      'assets/images/hobby/dizzy_complete-min.jpg',
      'assets/images/hobby/warhammer_misc4-min.jpg',
      'assets/images/hobby/warhammer_misc5-min.jpg',
      'assets/images/hobby/warhammer_misc6-min.jpg',
      'assets/images/hobby/graboid_unpainted-min.jpg',
      'assets/images/hobby/graboid_painted-min.jpg',
      'assets/images/hobby/graboid_painted2-min.jpg',
      'assets/images/hobby/guilliman_unpainted1-min.jpg',
      'assets/images/hobby/guilliman_unpainted2-min.jpg',
      'assets/images/hobby/guilliman_unpainted3-min.jpg',
      'assets/images/hobby/guilliman_painted-min.jpg',
      'assets/images/hobby/joker_printing-min.jpg',
      'assets/images/hobby/joker_unpainted-min.jpg',
      'assets/images/hobby/joker_complete-min.jpg',
      'assets/images/hobby/mm1-min.jpg',
      'assets/images/hobby/mm2-min.jpg',
      'assets/images/hobby/oddish_printing-min.jpg',
      'assets/images/hobby/oddish_painted1-min.jpg',
      'assets/images/hobby/misc_statues1-min.jpg',
      'assets/images/hobby/hydralisk-min.jpg',
      'assets/images/hobby/eye_target-min.jpg',
      'assets/images/hobby/chozo_painted-min.jpg',
      'assets/images/hobby/warhammer_misc7-min.jpg',
      'assets/images/hobby/warhammer_misc8-min.jpg',
      'assets/images/hobby/warhammer_misc9-min.jpg',
    ];
}
