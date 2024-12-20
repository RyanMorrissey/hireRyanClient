import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'
import { NavBarComponent } from './components/shared/nav-bar/nav-bar.component';
import {} from '@angular/common/http';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavBarComponent, CommonModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'hireRyanClient';
}
