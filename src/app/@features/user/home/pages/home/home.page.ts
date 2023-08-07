import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { ProductsService } from 'src/app/@shared/services/products.service';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/@shared/services/categories.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  categories: string[] = [];
  products: Product[] = [];

  loading: boolean = false;

  categoriesSubscription!: Subscription;
  productsObservableSubscription!: Subscription;

  constructor(private categoryService: CategoriesService, private productService: ProductsService) {}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();

    this.productsObservableSubscription = this.productService
      .getProductUpdateListener()
      .subscribe({
        next: (res: Product[]) => {
          this.loading = false;
          this.products = res;
        },
      });

  }

  getCategories(): void {
    this.loading = true;
    this.categoriesSubscription = this.categoryService.getAllCategories().subscribe({
      next: (rsp: string[]) => {
        this.categories = rsp;
        this.loading = false;
      },
    });
  }

  getProducts(): void {
    this.loading = true;
    this.productService.getAll();
  }

  ngOnDestroy(): void {
    this.categoriesSubscription.unsubscribe();
    this.productsObservableSubscription.unsubscribe();
  }
}
