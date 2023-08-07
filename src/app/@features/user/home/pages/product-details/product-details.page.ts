import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/@shared/services/products.service';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage {
  product!: Product | null;
  productId!: number;
  constructor(
    private productService: ProductsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
      this.productService.getProductById(this.productId).subscribe({
        next: (res: Product) => {
          this.product = res;
          console.log(this.product);
        },
      });
    });
  }
}
