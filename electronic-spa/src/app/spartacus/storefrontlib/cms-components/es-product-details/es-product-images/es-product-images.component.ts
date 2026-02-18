import { Component } from '@angular/core';
import {
  CurrentProductService,
  ProductImagesComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-images',
  standalone: false,
  templateUrl: './es-product-images.component.html',
  styleUrl: './es-product-images.component.scss',
})
export class EsProductImagesComponent extends ProductImagesComponent {
  constructor(protected override currentProductService: CurrentProductService) {
    super(currentProductService);
  }
}
