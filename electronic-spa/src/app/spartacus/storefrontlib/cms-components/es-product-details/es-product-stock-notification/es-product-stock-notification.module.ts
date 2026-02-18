import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { StockNotificationModule } from '@spartacus/storefront';
import { EsProductStockNotificationComponent } from './es-product-stock-notification.component';

@NgModule({
  declarations: [EsProductStockNotificationComponent],
  imports: [CommonModule, StockNotificationModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        StockNotificationComponent: {
          component: EsProductStockNotificationComponent,
        },
      },
    }),
  ],
  exports: [EsProductStockNotificationComponent],
})
export class EsProductStockNotificationModule {}
