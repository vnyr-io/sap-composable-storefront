import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SortModel } from '@spartacus/core';

@Component({
  selector: 'app-es-sorting',
  standalone: false,
  templateUrl: './es-sorting.component.html',
  styleUrl: './es-sorting.component.scss',
  host: {
    class: 'form-group cx-sort-dropdown col-12 col-lg-4 ml-lg-auto',
  },
})
export class EsSortingComponent {
  @Input() sortOptions: SortModel[] | undefined;
  @Input() selectedOption: string | undefined;
  @Input() ariaLabel: string | undefined;
  @Input() ariaControls = 'product-results-list';
  @Input() placeholder = 'Sort by';
  @Input() sortLabels: { [code: string]: string } | null = null;

  @Output() sortListEvent = new EventEmitter<string>();

  sortList(sortCode: string): void {
    this.sortListEvent.emit(sortCode);
  }
}
