import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common'

@Component({
    selector: 'app-nav-bar',
    imports: [CommonModule],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.less'
})
export class NavBarComponent implements OnInit{

  options: string[]
  test: boolean = false;

  constructor(
    private snackBar : MatSnackBar
  ) {
    this.options = ['home', 'resume', 'frontend', 'backend', 'hobbies', 'gimli']
  }

  ngOnInit(): void {
    this.test = true
  }
}
