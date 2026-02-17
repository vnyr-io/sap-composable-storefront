import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import {
  MediaModule,
  OutletModule,
  PageComponentModule,
  StarRatingModule,
} from '@spartacus/storefront';
import { EsProductListItemComponent } from './es-product-list-item.component';

@NgModule({
  declarations: [EsProductListItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    UrlModule,
    MediaModule,
    StarRatingModule,
    OutletModule,
    PageComponentModule,
  ],
  exports: [EsProductListItemComponent],
})
export class EsProductListItemModule {}
