import { Component } from '@angular/core';
import { CmsProductCarouselComponent, ProductService } from '@spartacus/core';
import {
  CmsComponentData,
  ProductCarouselComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-carousel',
  standalone: false,
  templateUrl: './es-carousel.component.html',
  styleUrl: './es-carousel.component.scss',
})
export class EsCarouselComponent extends ProductCarouselComponent {
  constructor(
    componentData: CmsComponentData<CmsProductCarouselComponent>,
    productService: ProductService
  ) {
    super(componentData, productService);
  }
}
