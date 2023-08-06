import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { LanguageService } from 'src/app/@core/services/language/language.service';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { ProductsService } from 'src/app/@shared/services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage {
  displayedColumns: string[] = [
    'id',
    'image',
    'title',
    'price',
    'category',
    'description',
  ];

  productsObservableSubscription!: Subscription;
  products: Product[] = [];
  loading: boolean = false;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.getProducts();

    this.productsObservableSubscription = this.productsService
      .getProductUpdateListener()
      .subscribe({
        next: (res: Product[]) => {
          this.loading = false;
          this.products = res;
        },
      });
  }

  getProducts() {
    this.loading = true;
    this.productsService.getAll();
  }

  create() {
    this.router.navigate(['admin/products/add']);
  }

  edit(id: number) {
    this.router.navigate(['admin/products/edit/', id]);
  }

  delete(id: number) {
    this.products = this.products.filter((p) => p.id !== id);
    this.productsService.deleteProduct(id);
  }

  ngOnDestroy(): void {
    this.productsObservableSubscription.unsubscribe();
  }
}
