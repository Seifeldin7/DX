import { NgModule } from '@angular/core';
import { ProductsFormPage } from './pages/products-form/products-form.page';
import { ProductsListPage } from './pages/products-list/products-list.page';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [
    ProductsListPage,
    ProductsFormPage,
  ],
  imports: [
    SharedModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
