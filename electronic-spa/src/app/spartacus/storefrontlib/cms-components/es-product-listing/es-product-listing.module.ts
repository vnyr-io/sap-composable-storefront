import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsActiveFacetsModule } from './es-active-facets/es-active-facets.module';
import { EsFacetListModule } from './es-facet-list/es-facet-list.module';
import { EsProductRefinementsModule } from './es-product-refinements/es-product-refinements.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EsActiveFacetsModule,
    EsFacetListModule,
    EsProductRefinementsModule,
  ],
})
export class EsProductListingModule { }
