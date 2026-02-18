import { Component } from '@angular/core';
import { CurrentProductService, ProductSummaryComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-desc',
  standalone: false,
  templateUrl: './es-product-desc.component.html',
  styleUrl: './es-product-desc.component.scss'
})
export class EsProductDescComponent extends ProductSummaryComponent {
  constructor(
    protected override currentProductService: CurrentProductService
  ) {
    super(currentProductService);
  }
}
