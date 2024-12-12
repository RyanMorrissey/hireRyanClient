import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RyansHttpService {
  // hold your horses I know its localhost i'll change it later sheesh
  // Im prolly gonna delete and rewrite this all anyway
  private url = 'http://localhost:8080/check';

  constructor(
    private httpClient: HttpClient
  ) { }

  testService() {
    console.log('testService() called')
  }

  get(url: string, options?: any) {
    return this.httpClient.get(url, options);
  }

  post(url: string, data: any, options?: any) {
    return this.httpClient.post(url, data, options);
  }

  put(url: string, data: any, options?: any) {
    return this.httpClient.put(url, data, options);
  }

  delete(url: string, options?: any) {
    return this.httpClient.delete(url, options);
  }
}
