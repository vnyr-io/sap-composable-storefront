import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  UrlModule,
  provideConfig,
} from '@spartacus/core';
import {
  AtMessageModule,
  BtnLikeLinkModule,
  IconModule,
} from '@spartacus/storefront';
import { RouterModule } from '@angular/router';
import { EsProductAddToWishlistComponent } from './es-product-add-to-wishlist.component';

@NgModule({
  declarations: [EsProductAddToWishlistComponent],
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    RouterModule,
    UrlModule,
    AtMessageModule,
    FeaturesConfigModule,
    BtnLikeLinkModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        AddToWishListComponent: {
          component: EsProductAddToWishlistComponent,
        },
      },
    }),
  ],
  exports: [EsProductAddToWishlistComponent],
})
export class EsProductAddToWishlistModule { }
