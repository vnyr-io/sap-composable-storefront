import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsConfig,
  provideConfig,
} from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductAddToCartComponent: {
          data: {
            inventoryDisplay: false,
          },
        },
      },
    }),
  ],
})
export class EsProductAddToCartModule { }
