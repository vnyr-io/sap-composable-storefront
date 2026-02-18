import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
} from '@spartacus/core';
import {
  OutletModule,
  PageComponentModule,
  TabModule,
} from '@spartacus/storefront';
import { EsTabParagraphContainerComponent } from './es-tab-paragraph-container.component';

@NgModule({
  declarations: [EsTabParagraphContainerComponent],
  imports: [
    CommonModule,
    PageComponentModule,
    OutletModule,
    I18nModule,
    TabModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        CMSTabParagraphContainer: {
          component: EsTabParagraphContainerComponent,
        },
      },
    }),
  ],
  exports: [EsTabParagraphContainerComponent],
})
export class EsTabParagraphContainerModule {}
