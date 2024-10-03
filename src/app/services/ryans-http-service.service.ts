import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RyansHttpService {

  constructor(
    private http: HttpClient 
  ) { }

  testService() {
    console.log('testService() called')
  }

  get(url: string, options?: any) { 
    return this.http.get(url, options); 
  } 

  post(url: string, data: any, options?: any) { 
    return this.http.post(url, data, options); 
  } 
  
  put(url: string, data: any, options?: any) { 
    return this.http.put(url, data, options); 
  } 
  
  delete(url: string, options?: any) { 
    return this.http.delete(url, options); 
  } 
}
