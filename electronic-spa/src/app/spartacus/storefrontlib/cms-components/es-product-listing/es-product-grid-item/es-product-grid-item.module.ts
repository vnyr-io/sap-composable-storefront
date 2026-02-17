import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import {
  MediaModule,
  OutletModule,
  PageComponentModule,
} from '@spartacus/storefront';
import { EsProductGridItemComponent } from './es-product-grid-item.component';
import { EsStarRatingModule } from '../es-star-rating/es-star-rating.module';

@NgModule({
  declarations: [EsProductGridItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    UrlModule,
    MediaModule,
    EsStarRatingModule,
    OutletModule,
    PageComponentModule,
  ],
  exports: [EsProductGridItemComponent],
})
export class EsProductGridItemModule {}
