import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly baseUrl = 'https://fakestoreapi.com';

  get URL(): string {
    return this.baseUrl;
  }

  constructor(private http: HttpClient) {}

  post(url: string, data: any, options?: any): Observable<any> {
    return this.http.post(`${this.URL}${url}`, data, options);
  }

  patch(url: string, data: any, options?: any): Observable<any> {
    return this.http.patch(this.URL + url, data, options);
  }

  get(url: string, data?: any, params?: any): Observable<any> {
    return this.http.get(this.URL + url, params);
  }

  put(url: string, data?: any, options?: any): Observable<any> {
    return this.http.put(this.URL + url, data, options);
  }

  delete(url: string, data?: any, params?: any): Observable<any> {
    return this.http.delete(this.URL + url, params);
  }
}
