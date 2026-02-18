import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule, UrlModule } from '@spartacus/core';
import {
  ItemCounterModule,
  MediaModule,
  OutletModule,
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { EsPromotionsModule } from '../es-promotions/es-promotions.module';
import { EsCartItemValidationWarningModule } from '../es-cart-item-validation-warning/es-cart-item-validation-warning.module';
import { EsCartItemComponent } from './es-cart-item.component';

@NgModule({
  declarations: [EsCartItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    UrlModule,
    I18nModule,
    MediaModule,
    OutletModule,
    ItemCounterModule,
    EsPromotionsModule,
    EsCartItemValidationWarningModule,
  ],
  exports: [EsCartItemComponent],
})
export class EsCartItemModule {}
