import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, I18nModule, provideConfig } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { EsActiveFacetsModule } from '../es-active-facets/es-active-facets.module';
import { EsFacetListModule } from '../es-facet-list/es-facet-list.module';
import { EsProductRefinementsComponent } from './es-product-refinements.component';

@NgModule({
  declarations: [EsProductRefinementsComponent],
  imports: [
    CommonModule,
    IconModule,
    I18nModule,
    EsActiveFacetsModule,
    EsFacetListModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductRefinementComponent: {
          component: EsProductRefinementsComponent,
        },
      },
    }),
  ],
  exports: [EsProductRefinementsComponent],
})
export class EsProductRefinementsModule {}
