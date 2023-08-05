import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';

const primeNGModules = [
  ButtonModule,
  TableModule,
  PasswordModule,
  CardModule,
  InputTextModule,
  PaginatorModule,
  ToastModule,
  SliderModule,
  DropdownModule
];

@NgModule({
  declarations: [],
  imports: [...primeNGModules],
  exports: [primeNGModules],
})
export class PrimeNGModule {}
