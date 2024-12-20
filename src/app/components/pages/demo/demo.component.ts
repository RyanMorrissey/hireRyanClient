import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DogComponent } from '@components/pages/dog/dog.component';

@Component({
  selector: 'app-demo',
  imports: [DogComponent, CommonModule],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.less'
})
export class DemoComponent implements OnInit {
  private queryParamSubscription!: Subscription;
  currentUrl: String = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit(): void {
      this.queryParamSubscription = this.route.queryParamMap.subscribe(params => {
        const queryParam = params.get('display');
        if (queryParam != null) {
          this.currentUrl = queryParam;
        } else {
          this.currentUrl = 'explanation';
        }
      });
  }

  ngOnDestroy(): void {
      if (this.queryParamSubscription) {
        this.queryParamSubscription.unsubscribe();
      }
  }

  updateQueryParam(param: String): void {
    this.router.navigate([], {
      queryParams: { display: param },
      queryParamsHandling: 'merge'
    });
  }
}
