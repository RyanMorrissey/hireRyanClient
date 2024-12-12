import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import {} from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent, HomeComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'hireRyanClient';
}
