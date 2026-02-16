import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  KeyboardFocusModule,
  OutletModule,
  SkipLinkModule,
} from '@spartacus/storefront';
import { EsStorefrontComponent } from './es-storefront.component';
import { EsHeaderModule } from '../es-header/es-header.module';
import { EsFooterModule } from '../es-footer/es-footer.module';

@NgModule({
  declarations: [EsStorefrontComponent],
  imports: [
    RouterModule,
    OutletModule,
    KeyboardFocusModule,
    SkipLinkModule,
    EsHeaderModule,
    EsFooterModule,
  ],
  exports: [EsStorefrontComponent],
})
export class EsStorefrontModule {}
