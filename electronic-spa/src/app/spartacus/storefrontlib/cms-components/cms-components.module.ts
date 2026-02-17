import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsNavigationModule } from './es-navigation/es-navigation.module';
import { EsHeaderModule } from './es-header/es-header.module';
import { EsFooterModule } from './es-footer/es-footer.module';
import { EsBannerModule } from './es-banner/es-banner.module';
import { EsCarouselModule } from './es-carousel/es-carousel.module';
import { EsBottomHeaderModule } from './es-bottom-header/es-bottom-header.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EsHeaderModule,
    EsFooterModule,
    EsNavigationModule,
    EsBannerModule,
    EsCarouselModule,
    EsBottomHeaderModule,
  ],
})
export class CmsComponentsModule {}
