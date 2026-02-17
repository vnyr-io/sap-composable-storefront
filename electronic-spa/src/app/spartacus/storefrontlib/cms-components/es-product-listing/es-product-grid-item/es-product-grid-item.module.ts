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
import { EsProductGridItemComponent } from './es-product-grid-item.component';

@NgModule({
  declarations: [EsProductGridItemComponent],
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
  exports: [EsProductGridItemComponent],
})
export class EsProductGridItemModule {}
