import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
} from '@spartacus/core';
import { EsProductIntroComponent } from './es-product-intro.component';
import { EsStarRatingModule } from '../../es-product-listing/es-star-rating/es-star-rating.module';

@NgModule({
  declarations: [EsProductIntroComponent],
  imports: [CommonModule, I18nModule, EsStarRatingModule, FeaturesConfigModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductIntroComponent: {
          component: EsProductIntroComponent,
        },
      },
    }),
  ],
  exports: [EsProductIntroComponent],
})
export class EsProductIntroModule { }
