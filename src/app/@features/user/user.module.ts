import { FiltersComponent } from './components/filters/filters.component';
import { ProductsWithFiltersComponent } from './components/products-with-filters/products-with-filters.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    HomePage,
    ProductCardComponent,
    ProductsWithFiltersComponent,
    FiltersComponent,
  ],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
