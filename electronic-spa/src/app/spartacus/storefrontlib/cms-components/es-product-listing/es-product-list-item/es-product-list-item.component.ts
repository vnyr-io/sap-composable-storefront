import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  ProductListItemComponent,
  ProductListItemContext,
  ProductListItemContextSource,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-list-item',
  standalone: false,
  templateUrl: './es-product-list-item.component.html',
  styleUrl: './es-product-list-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProductListItemContextSource,
    {
      provide: ProductListItemContext,
      useExisting: ProductListItemContextSource,
    },
  ],
})
export class EsProductListItemComponent extends ProductListItemComponent {
  constructor(
    protected override productListItemContextSource: ProductListItemContextSource
  ) {
    super(productListItemContextSource);
  }
}
