import { UserLayoutComponent } from './../components/layout/user-layout.component';
import { FiltersComponent } from './../components/filters/filters.component';
import { ProductsWithFiltersComponent } from './../components/products-with-filters/products-with-filters.component';
import { ProductCardComponent } from './../components/product-card/product-card.component';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomePage,
    ProductCardComponent,
    ProductsWithFiltersComponent,
    FiltersComponent,
    UserLayoutComponent,
  ],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {
  constructor() {}
}
