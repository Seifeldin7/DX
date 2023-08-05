import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsFormPage } from './pages/products-form/products-form.page';
import { ProductsListPage } from './pages/products-list/products-list.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'prefix',
  },
  {
    path: 'list',
    component: ProductsListPage
  },
  {
    path: 'add',
    component: ProductsFormPage
  },
  {
    path: 'edit/:productId',
    component: ProductsFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
