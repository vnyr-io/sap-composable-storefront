import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ProductGridItemComponent,
  ProductListItemContext,
  ProductListItemContextSource,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-grid-item',
  standalone: false,
  templateUrl: './es-product-grid-item.component.html',
  styleUrl: './es-product-grid-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ],
})
export class EsProductGridItemComponent extends ProductGridItemComponent {
  constructor(
    protected override productListItemContextSource: ProductListItemContextSource
  ) {
    super(productListItemContextSource);
  }
}
