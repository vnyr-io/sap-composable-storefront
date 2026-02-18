import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import {
  CarouselModule,
  MediaModule,
  OutletModule,
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { EsProductImagesComponent } from './es-product-images.component';

@NgModule({
  declarations: [EsProductImagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    MediaModule,
    OutletModule,
    CarouselModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductImagesComponent: {
          component: EsProductImagesComponent,
        },
      },
    }),
  ],
  exports: [EsProductImagesComponent],
})
export class EsProductImagesModule {}
