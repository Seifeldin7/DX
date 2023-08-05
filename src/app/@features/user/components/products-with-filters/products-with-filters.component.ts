import { Component, Input } from '@angular/core';
import { Filters } from 'src/app/@shared/interfaces/filters/filters.interface';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';

@Component({
  selector: 'app-products-with-filters',
  templateUrl: './products-with-filters.component.html',
  styleUrls: ['./products-with-filters.component.scss'],
})
export class ProductsWithFiltersComponent {
  @Input() loading: boolean = false;
  @Input() categories!: string[];
  @Input() set products(products: Product[]) {
    this.productsList = products;
    this._products = products;
  }

  productsList: Product[] = [];
  _products: Product[] = [];

  filter(filters: Filters) {
    this._products = this.productsList;
    console.log(this._products)

    if (filters.minPrice) {
      this._products = this._products.filter(
        (product: Product) => product.price >= filters.minPrice
      );
    }
    if (filters.maxPrice) {
      this._products = this._products.filter(
        (product: Product) => product.price <= filters.maxPrice
      );
    }
    if (filters.category) {
      this._products = this._products.filter(
        (product: Product) => product.category === filters.category
      );
    }
  }
}
