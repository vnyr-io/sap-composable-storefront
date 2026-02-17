import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, I18nModule, provideConfig } from '@spartacus/core';
import { CarouselModule, ProductCarouselModule } from '@spartacus/storefront';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { EsCarouselBestsellingComponent } from './es-carousel-bestselling/es-carousel-bestselling.component';
import { EsCarouselCustomComponent } from './es-carousel-custom/es-carousel-custom.component';
import { EsCarouselWhatsNewComponent } from './es-carousel-whats-new/es-carousel-whats-new.component';
import { EsCarouselComponent } from './es-carousel.component';

@NgModule({
  declarations: [
    EsCarouselBestsellingComponent,
    EsCarouselCustomComponent,
    EsCarouselWhatsNewComponent,
    EsCarouselComponent,
  ],
  imports: [
    CommonModule,
    CarouselModule,
    I18nModule,
    SlickCarouselModule,
    ProductCarouselModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductCarouselComponent: {
          component: EsCarouselComponent,
        },
        EsProductCarouselBestsellingComponent: {
          component: EsCarouselBestsellingComponent,
        },
        EsProductCarouselWhatsNewComponent: {
          component: EsCarouselWhatsNewComponent,
        },
        // Custom carousel component for demonstration purposes - not linked to any specific CMS component
        EsProductCarouselCustomComponent: {
          component: EsCarouselCustomComponent,
        },
      },
    }),
  ],
  exports: [
    EsCarouselBestsellingComponent,
    EsCarouselCustomComponent,
    EsCarouselWhatsNewComponent,
    EsCarouselComponent,
  ],
})
export class EsCarouselModule {}
