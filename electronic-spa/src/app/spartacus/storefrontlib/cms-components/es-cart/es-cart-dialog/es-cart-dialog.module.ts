import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  AddedToCartDialogModule,
  CartSharedModule,
} from '@spartacus/cart/base/components';
import {
  BtnLikeLinkModule,
  DIALOG_TYPE,
  IconModule,
  ItemCounterModule,
  KeyboardFocusModule,
  LAUNCH_CALLER,
  SpinnerModule,
} from '@spartacus/storefront';
import {
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
  provideConfig,
} from '@spartacus/core';
import { EsCartItemModule } from '../es-cart-item/es-cart-item.module';
import { EsPromotionsModule } from '../es-promotions/es-promotions.module';
import { EsCartDialogComponent } from './es-cart-dialog.component';

@NgModule({
  declarations: [EsCartDialogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AddedToCartDialogModule,
    CartSharedModule,
    SpinnerModule,
    UrlModule,
    IconModule,
    I18nModule,
    ItemCounterModule,
    KeyboardFocusModule,
    FeaturesConfigModule,
    BtnLikeLinkModule,
    EsCartItemModule,
    EsPromotionsModule,
  ],
  providers: [
    provideConfig({
      launch: {
        [LAUNCH_CALLER.ADDED_TO_CART]: {
          inlineRoot: true,
          component: EsCartDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
})
export class EsCartDialogModule {}
