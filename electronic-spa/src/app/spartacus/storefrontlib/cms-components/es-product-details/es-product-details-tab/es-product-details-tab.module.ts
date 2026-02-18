import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { ProductDetailsTabModule } from '@spartacus/storefront';
import { EsProductDetailsTabComponent } from './es-product-details-tab.component';

@NgModule({
  declarations: [EsProductDetailsTabComponent],
  imports: [CommonModule, ProductDetailsTabModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductDetailsTabComponent: {
          component: EsProductDetailsTabComponent,
        },
      },
    }),
  ],
  exports: [EsProductDetailsTabComponent],
})
export class EsProductDetailsTabModule {}
