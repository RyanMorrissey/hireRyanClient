import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment  } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RyansHttpService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  get(endpoint: string, id?: string): Promise<any> {
    const url = id ? `${this.apiUrl}/${endpoint}/${id}` : `${this.apiUrl}/${endpoint}`;
    return this.http.get<any>(url).toPromise()
      .then(response => {
        // TODO: write a definition class so I don't need to type "OK"
        if (response.status && response.status == "OK") {
          // TODO: display success toast
          return response.payload
        } else {
          // TODO: display failure toast
          return null
        }
        })
      .catch(this.handleError);
  }

  post(endpoint: string, data: any): Promise<any> {
    return this.http.post<any>(`${this.apiUrl}/${endpoint}`, data, this.getHttpOptions()).toPromise()
      .then(response => {
         // TODO: write a definition class so I don't need to type "OK"
         if (response.status && response.status == "OK") {
           return response.payload
         } else {
           return null
         }
       }).catch(this.handleError);
  }

  put(endpoint: string, data: any): Promise<any> {
    return this.http.put<any>(`${this.apiUrl}/${endpoint}`, data, this.getHttpOptions()).toPromise()
     .then(response => {
       // TODO: write a definition class so I don't need to type "OK"
       if (response.status && response.status == "OK") {
         return response.payload
       } else {
         return null
       }
     }).catch(this.handleError);
  }

  delete(endpoint: string, id: string): Promise<boolean> {
    return this.http.delete<any>(`${this.apiUrl}/${endpoint}/${id}`).toPromise()
    .then(response => {
      // TODO: write a definition class so I don't need to type "OK"
      if (response.status && response.status == "OK") {
        return response.payload
      } else {
        return false
      }
    }).catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private getHttpOptions() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return { headers };
  }
}
