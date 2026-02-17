import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { ProductScrollComponent, ProductListComponentService } from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-scroll',
  standalone: false,
  templateUrl: './es-product-scroll.component.html',
  styleUrl: './es-product-scroll.component.scss',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class EsProductScrollComponent extends ProductScrollComponent {
  constructor(
    productListComponentService: ProductListComponentService,
    ref: ChangeDetectorRef
  ) {
    super(productListComponentService, ref);
  }
}
