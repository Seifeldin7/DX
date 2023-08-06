import { UserLayoutComponent } from './components/layout/user-layout.component';
import { FiltersComponent } from './components/filters/filters.component';
import { ProductsWithFiltersComponent } from './components/products-with-filters/products-with-filters.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [],
  imports: [SharedModule, UserRoutingModule],
})
export class UserModule {}
