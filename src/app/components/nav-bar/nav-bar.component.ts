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
      console.log('Did this work?') 
      this.ryansHttpService.testService()
      // this.ryansHttpService.get('https://jsonplaceholder.typicode.com/posts/1').subscribe({
      //   next: (v) => console.log(v),
      //   error: (e) => console.error(e),
      //   complete: () => console.info('complete') 
      // })

      // this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      //       .subscribe(
      //           response => {
      //               this.data = response;
      //               console.log('response', response);
      //           },
      //           error => {
      //               console.error('Error fetching data:', error);
      //           }
      //       );
  }
}
