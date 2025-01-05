import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common'
import { LocationStrategy } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-nav-bar',
    imports: [CommonModule],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.less'
})
export class NavBarComponent implements OnInit, OnDestroy{

  routerSubscription!: Subscription;
  options: string[]
  currentUrl: string = '';

  constructor(
    private snackBar : MatSnackBar,
    private url : LocationStrategy,
    private router: Router
  ) {
    this.options = ['home', 'resume', 'frontend', 'backend', 'hobbies', 'gimli', 'demo']

  }

  ngOnInit(): void {
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects.substring(1)
        if (this.currentUrl == '') {
          // default since I added a /home url for some reason
          this.currentUrl = 'home'
        }
      });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }
}
