import { Component, OnInit } from '@angular/core';
import { RyansHttpService } from '../../services/ryans-http-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
    selector: 'app-nav-bar',
    imports: [],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.less'
})
export class NavBarComponent implements OnInit{

  constructor(
    private ryansHttpService : RyansHttpService,
    private snackBar : MatSnackBar
  ) {}

  ngOnInit(): void {
    console.log('Loaded nav bar')
  }

  nyi(link: string): void {
    this.snackBar.open(link + ' is not implemented yet', 'Close')
  }

  lemon(): void {
    this.snackBar.open('lemon', 'lemon')
    }
}
