import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { EsProductViewComponent } from './es-product-view.component';

@NgModule({
  declarations: [EsProductViewComponent],
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
  ],
  exports: [EsProductViewComponent],
})
export class EsProductViewModule {}
