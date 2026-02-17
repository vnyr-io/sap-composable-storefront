import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CmsConfig, I18nModule, provideConfig } from '@spartacus/core';
import { ProductListModule } from '@spartacus/storefront';
import { EsProductListComponent } from './es-product-list.component';
import { EsProductGridItemModule } from '../es-product-grid-item/es-product-grid-item.module';
import { EsProductListItemModule } from '../es-product-list-item/es-product-list-item.module';
import { EsPaginationModule } from '../es-pagination/es-pagination.module';
import { EsProductScrollModule } from '../es-product-scroll/es-product-scroll.module';
import { EsSortingModule } from '../es-sorting/es-sorting.module';
import { EsProductViewModule } from '../es-product-view/es-product-view.module';

@NgModule({
  declarations: [EsProductListComponent],
  imports: [
    CommonModule,
    I18nModule,
    ProductListModule,
    EsProductGridItemModule,
    EsProductListItemModule,
    EsPaginationModule,
    EsProductScrollModule,
    EsSortingModule,
    EsProductViewModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CMSProductListComponent: {
          component: EsProductListComponent,
          data: {
            composition: {
              inner: ['ProductAddToCartComponent'],
            },
          },
        },
        ProductGridComponent: {
          component: EsProductListComponent,
          data: {
            composition: {
              inner: ['ProductAddToCartComponent'],
            },
          },
        },
        SearchResultsListComponent: {
          component: EsProductListComponent,
          data: {
            composition: {
              inner: ['ProductAddToCartComponent'],
            },
          },
        },
      },
    }),
  ],
  exports: [EsProductListComponent],
})
export class EsProductListModule {}
