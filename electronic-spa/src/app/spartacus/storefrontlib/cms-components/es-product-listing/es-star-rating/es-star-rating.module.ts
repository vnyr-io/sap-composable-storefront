import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { EsStarRatingComponent } from './es-star-rating.component';

@NgModule({
  declarations: [EsStarRatingComponent],
  imports: [
    CommonModule,
    IconModule,
    I18nModule,
  ],
  exports: [EsStarRatingComponent],
})
export class EsStarRatingModule {}
