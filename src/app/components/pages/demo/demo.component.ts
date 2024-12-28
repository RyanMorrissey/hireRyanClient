import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { DogComponent } from '@components/pages/dog/dog.component';
import { HttpTesterComponent } from '@components/shared/http-tester/http-tester.component';
import { RyansHttpService } from '@services/ryans-http-service.service'
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-demo',
  imports: [DogComponent, CommonModule, HttpTesterComponent],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.less'
})
export class DemoComponent implements OnInit {
  private queryParamSubscription!: Subscription;
  currentUrl: String = ''

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private httpService: RyansHttpService) {}

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

  async updateQueryParam(param: String): Promise<void> {
    this.router.navigate([], {
      queryParams: { display: param },
      queryParamsHandling: 'merge'
    });
  }
}
