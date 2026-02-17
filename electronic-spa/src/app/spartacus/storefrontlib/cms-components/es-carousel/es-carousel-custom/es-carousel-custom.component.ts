import { Component } from '@angular/core';
import { CmsProductCarouselComponent, ProductService } from '@spartacus/core';
import {
  CmsComponentData,
  ProductCarouselComponent,
} from '@spartacus/storefront';
import { filter, map, shareReplay, take } from 'rxjs/operators';

@Component({
  selector: 'app-es-carousel-custom',
  standalone: false,
  templateUrl: './es-carousel-custom.component.html',
  styleUrl: './es-carousel-custom.component.scss',
})
export class EsCarouselCustomComponent extends ProductCarouselComponent {
  readonly slideConfig = {
    arrows: true,
    dots: true,
    infinite: false,
    slidesToScroll: 1,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  readonly slickItems$ = this.items$.pipe(
    filter((items) => Array.isArray(items) && items.length > 0),
    take(1),
    map((items) => [...items]),
    shareReplay(1)
  );

  constructor(
    componentData: CmsComponentData<CmsProductCarouselComponent>,
    productService: ProductService
  ) {
    super(componentData, productService);
  }
}
