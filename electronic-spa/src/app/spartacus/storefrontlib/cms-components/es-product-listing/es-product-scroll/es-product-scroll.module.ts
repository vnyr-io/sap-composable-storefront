import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { I18nModule } from '@spartacus/core';
import { SpinnerModule } from '@spartacus/storefront';
import { EsProductGridItemModule } from '../es-product-grid-item/es-product-grid-item.module';
import { EsProductListItemModule } from '../es-product-list-item/es-product-list-item.module';
import { EsProductScrollComponent } from './es-product-scroll.component';

@NgModule({
  declarations: [EsProductScrollComponent],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    I18nModule,
    SpinnerModule,
    EsProductGridItemModule,
    EsProductListItemModule,
  ],
  exports: [EsProductScrollComponent],
})
export class EsProductScrollModule {}
