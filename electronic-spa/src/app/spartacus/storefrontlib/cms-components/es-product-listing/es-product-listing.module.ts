import { NgModule } from '@angular/core';
import { EsProductListModule } from './es-product-list/es-product-list.module';
import { EsProductRefinementsModule } from './es-product-refinements/es-product-refinements.module';

@NgModule({
  declarations: [],
  imports: [EsProductListModule, EsProductRefinementsModule],
})
export class EsProductListingModule {}
