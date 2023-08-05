import { HeaderComponent } from './../../components/header/header.component';
import { PrimeNGModule } from './../primeng/primeng.module';
import { NgModule } from '@angular/core';
import {
  CommonModule,
  NgOptimizedImage,
  PRECONNECT_CHECK_BLOCKLIST,
} from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NoDataComponent } from '../../components/no-data/no-data.component';
import { LayoutComponent } from '../../components/layout/layout.component';

@NgModule({
  declarations: [NoDataComponent, HeaderComponent, LayoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterModule,
    TranslateModule,
    PrimeNGModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    RouterModule,
    NoDataComponent,
    TranslateModule,
    PrimeNGModule,
  ],
  providers: [
    {
      provide: PRECONNECT_CHECK_BLOCKLIST,
      useValue: 'https://fakestoreapi.com',
    },
  ],
})
export class SharedModule {}
