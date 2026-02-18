import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { ProductReviewsModule } from '@spartacus/storefront';
import { EsProductReviewsComponent } from './es-product-reviews.component';

@NgModule({
  declarations: [EsProductReviewsComponent],
  imports: [CommonModule, ProductReviewsModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductReviewsTabComponent: {
          component: EsProductReviewsComponent,
        },
      },
    }),
  ],
  exports: [EsProductReviewsComponent],
})
export class EsProductReviewsModule {}
