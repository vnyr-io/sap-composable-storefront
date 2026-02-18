import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
} from '@spartacus/core';
import { OutletModule, PromotionsModule } from '@spartacus/storefront';
import { EsProductDescComponent } from './es-product-desc.component';

@NgModule({
  declarations: [EsProductDescComponent],
  imports: [
    CommonModule,
    OutletModule,
    I18nModule,
    PromotionsModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductSummaryComponent: {
          component: EsProductDescComponent,
        },
      },
    }),
  ],
  exports: [EsProductDescComponent],
})
export class EsProductDescModule { }
