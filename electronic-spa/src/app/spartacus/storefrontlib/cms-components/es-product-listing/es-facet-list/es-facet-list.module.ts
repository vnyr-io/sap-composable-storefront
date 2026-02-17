import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FeaturesConfigModule, I18nModule } from '@spartacus/core';
import {
  FacetModule,
  IconModule,
  KeyboardFocusModule,
  TabModule,
} from '@spartacus/storefront';
import { EsFacetListComponent } from './es-facet-list.component';

@NgModule({
  declarations: [EsFacetListComponent],
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    FacetModule,
    KeyboardFocusModule,
    FeaturesConfigModule,
    TabModule,
  ],
  exports: [EsFacetListComponent],
})
export class EsFacetListModule {}
