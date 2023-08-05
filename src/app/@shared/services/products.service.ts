import { Product } from './../interfaces/product/product.interface';
import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/@core/services/api/api.service';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  readonly apiUrl: string = `/products`;
  products: Product[] = [];

  private productsUpdated = new Subject<Product[]>();

  constructor(private apiService: ApiService) {}

  getProductUpdateListener(): Observable<Product[]> {
    return this.productsUpdated.asObservable();
  }

  getAll(): void {
    this.apiService.get(this.apiUrl).subscribe((response) => {
      this.products = response;
      this.productsUpdated.next(this.products);
    });
  }

  deleteProduct(id: number): void {
    this.apiService.delete(`${this.apiUrl}/${id}`).subscribe({
      next: (res: Product) => {
        this.products = this.products.filter((p) => p.id !== id);
        this.productsUpdated.next(this.products);
      },
    });
  }

  createProduct(data: Product): void {
    this.apiService.post(`${this.apiUrl}`, data).subscribe({
      next: (res: Product) => {
        this.products = [...this.products, res];
        this.productsUpdated.next(this.products);
      },
    });
  }

  updateProduct(data: Product, id: number): void {
    this.apiService.put(`${this.apiUrl}/${id}`, data).subscribe({
      next: (res: Product) => {
        const productIndex = this.products.findIndex((p) => p.id === id);
        this.products[productIndex] = res;
        this.productsUpdated.next(this.products);
      },
    });
  }

  getProductsByCategory(category: string): Observable<Product[]> {
    return this.apiService.get(`${this.apiUrl}/category/${category}`);
  }
}
