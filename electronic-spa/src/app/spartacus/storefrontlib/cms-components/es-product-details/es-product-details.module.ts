import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsProductAddToCartModule } from './es-product-add-to-cart/es-product-add-to-cart.module';
import { EsProductAddToWishlistModule } from './es-product-add-to-wishlist/es-product-add-to-wishlist.module';
import { EsProductAttributesModule } from './es-product-attributes/es-product-attributes.module';
import { EsProductDescModule } from './es-product-desc/es-product-desc.module';
import { EsProductDetailsTabModule } from './es-product-details-tab/es-product-details-tab.module';
import { EsProductImagesModule } from './es-product-images/es-product-images.module';
import { EsProductIntroModule } from './es-product-intro/es-product-intro.module';
import { EsProductReviewsModule } from './es-product-reviews/es-product-reviews.module';
import { EsProductStockNotificationModule } from './es-product-stock-notification/es-product-stock-notification.module';
import { EsTabParagraphContainerModule } from './es-tab-paragraph-container/es-tab-paragraph-container.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EsProductImagesModule,
    EsProductIntroModule,
    EsProductDescModule,
    EsProductAttributesModule,
    EsProductDetailsTabModule,
    EsProductReviewsModule,
    EsProductAddToCartModule,
    EsProductAddToWishlistModule,
    EsProductStockNotificationModule,
    EsTabParagraphContainerModule,
  ],
})
export class EsProductDetailsModule {}
