import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CookieManagerService {

  constructor(private cookieService: CookieService) { }

  // Super basic cookie methods, I don't really want to go too crazy with them
  // I'll keep fancier logic in other components/services

  setCookie(name: string, value: string, days: number): void {
    this.cookieService.set(name, value, days);
  }

  getCookie(name: string): string {
    return this.cookieService.get(name);
  }

  deleteCookie(name: string): void {
    this.cookieService.delete(name);
  }
}
