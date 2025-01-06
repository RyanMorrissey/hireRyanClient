import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [],
    templateUrl: './home.component.html',
    styleUrl: './home.component.less'
})
export class HomeComponent {
    showDog: boolean = false; // Tracks whether the dog image is displayed

    toggleDog(): void {
      this.showDog = !this.showDog; // Toggles the image
    }
}
