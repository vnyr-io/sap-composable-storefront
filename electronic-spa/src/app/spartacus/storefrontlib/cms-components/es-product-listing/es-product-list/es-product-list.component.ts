import { Component } from '@angular/core';
import { GlobalMessageService } from '@spartacus/core';
import {
  PageLayoutService,
  ProductListComponent,
  ProductListComponentService,
  ViewConfig,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-list',
  standalone: false,
  templateUrl: './es-product-list.component.html',
  styleUrl: './es-product-list.component.scss',
})
export class EsProductListComponent extends ProductListComponent {
  constructor(
    pageLayoutService: PageLayoutService,
    productListComponentService: ProductListComponentService,
    globalMessageService: GlobalMessageService,
    scrollConfig: ViewConfig
  ) {
    super(
      pageLayoutService,
      productListComponentService,
      globalMessageService,
      scrollConfig
    );
  }
}
