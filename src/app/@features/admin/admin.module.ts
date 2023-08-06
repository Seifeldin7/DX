import { AdminLayoutComponent } from './components/layout/admin-layout.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [AdminLayoutComponent],
  imports: [SharedModule, AdminRoutingModule],
})
export class AdminModule {
  constructor() {}
}
