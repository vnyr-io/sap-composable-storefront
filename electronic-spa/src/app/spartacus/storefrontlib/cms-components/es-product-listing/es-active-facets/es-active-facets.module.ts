import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule } from '@spartacus/core';
import { IconModule, KeyboardFocusModule } from '@spartacus/storefront';
import { EsActiveFacetsComponent } from './es-active-facets.component';

@NgModule({
  declarations: [EsActiveFacetsComponent],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    IconModule,
    KeyboardFocusModule,
  ],
  exports: [EsActiveFacetsComponent],
})
export class EsActiveFacetsModule {}
