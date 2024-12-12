import { Component, OnInit } from '@angular/core';
import { RyansHttpService } from '../../services/ryans-http-service.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.less'
})
export class NavBarComponent implements OnInit{
  data: any;

  constructor(
    private ryansHttpService : RyansHttpService
  ) {}

  ngOnInit(): void {
      console.log('Loaded nav bar')
  }

  deadLink(): void {
    console.log('this router doesnt do anything yet')
  }
}
