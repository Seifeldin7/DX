import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/@shared/modules/shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './pages/login/login.page';

@NgModule({
  declarations: [LoginPage],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
