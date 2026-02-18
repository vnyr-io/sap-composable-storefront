import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { ProductAttributesModule } from '@spartacus/storefront';
import { EsProductAttributesComponent } from './es-product-attributes.component';

@NgModule({
  declarations: [EsProductAttributesComponent],
  imports: [CommonModule, ProductAttributesModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductAttributesComponent: {
          component: EsProductAttributesComponent,
        },
      },
    }),
  ],
  exports: [EsProductAttributesComponent],
})
export class EsProductAttributesModule {}
