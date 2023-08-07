import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Product } from '../../../../@shared/interfaces/product/product.interface';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;

  constructor(private router: Router) {}

  showProductDetails () {
    this.router.navigate(['user', this.product.id]);
  }
}
