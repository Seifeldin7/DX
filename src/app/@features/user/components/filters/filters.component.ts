import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Filters } from 'src/app/@shared/interfaces/filters/filters.interface';
import { Product } from 'src/app/@shared/interfaces/product/product.interface';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  @Input() categories!: string[];
  @Output() onFilter: EventEmitter<Filters> = new EventEmitter<Filters>();

  filters: Filters = {
    minPrice: 0,
    maxPrice: 0,
    category: '',
  };

  selectedRange: [number, number] = [0, 1000];
  selectedCategory: string = '';

  filter() {
    this.filters.maxPrice = this.selectedRange[1];
    this.filters.minPrice = this.selectedRange[0];
    this.filters.category = this.selectedCategory;

    this.onFilter.emit(this.filters);
  }
}
