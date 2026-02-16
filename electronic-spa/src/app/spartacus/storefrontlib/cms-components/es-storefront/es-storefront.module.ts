import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  GlobalMessageComponentModule,
  KeyboardFocusModule,
  OutletModule,
  OutletRefModule,
  PageLayoutModule,
  PageSlotModule,
  SkipLinkModule,
} from '@spartacus/storefront';
import { EsStorefrontComponent } from './es-storefront.component';
import { EsHeaderModule } from '../es-header/es-header.module';
import { EsFooterModule } from '../es-footer/es-footer.module';

@NgModule({
  declarations: [
    EsStorefrontComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageLayoutModule,
    PageSlotModule,
    KeyboardFocusModule,
    SkipLinkModule,
    EsHeaderModule,
    EsFooterModule
  ],
  exports: [
    EsStorefrontComponent
  ]
})
export class EsStorefrontModule { }
