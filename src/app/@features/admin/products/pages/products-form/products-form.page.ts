import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LanguageService } from 'src/app/@core/services/language/language.service';
import { ProductsService } from 'src/app/@shared/services/products.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.page.html',
  styleUrls: ['./products-form.page.scss'],
  providers: [MessageService],
})
export class ProductsFormPage implements OnInit {
  productForm: FormGroup = new FormGroup({});
  productId!: number;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private languageService: LanguageService,
    private route: ActivatedRoute,
    private messageService: MessageService
  ) {
    this.initForm();
  }

  initForm() {
    this.productForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.min(1)]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['productId'];
    });
    this.productsService.getProductUpdateListener().subscribe({
      next: (res) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: this.languageService.trans(
            this.productId
              ? 'messages.productupdatedsuccessfuly'
              : 'messages.productcreatedsuccessfully'
          ),
        });
        this.router.navigate(['admin/products']);
      },
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
      this.productId
        ? this.productsService.updateProduct(
            this.productForm.value,
            this.productId
          )
        : this.productsService.createProduct(this.productForm.value);
    }
  }
}
