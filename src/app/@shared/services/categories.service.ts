import { Product } from './../interfaces/product/product.interface';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api/api.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  readonly apiUrl: string = `/products/categories`;
  categories: string[] = [];

  constructor(private apiService: ApiService) {}

  getAllCategories(): Observable<string[]> {
    return this.apiService.get(`${this.apiUrl}`);
  }
}
