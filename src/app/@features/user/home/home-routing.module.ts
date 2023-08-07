import { ProductDetailsPage } from './pages/product-details/product-details.page';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: ':productId',
    component: ProductDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
