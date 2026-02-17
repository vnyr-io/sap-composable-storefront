import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, provideConfig } from '@spartacus/core';
import { GenericLinkModule } from '@spartacus/storefront';
import { EsBannerSimpleComponent } from './es-banner-simple/es-banner-simple.component';
import { EsBannerSimpleResponsiveComponent } from './es-banner-simple-responsive/es-banner-simple-responsive.component';
import { EsBannerSimpleGenericComponent } from './es-banner-simple-generic/es-banner-simple-generic.component';

@NgModule({
  declarations: [
    EsBannerSimpleComponent,
    EsBannerSimpleResponsiveComponent,
    EsBannerSimpleGenericComponent,
  ],
  imports: [CommonModule, GenericLinkModule],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: EsBannerSimpleResponsiveComponent,
        },
        BannerComponent: { component: EsBannerSimpleGenericComponent },
      },
    }),
  ],
  exports: [
    EsBannerSimpleComponent,
    EsBannerSimpleResponsiveComponent,
    EsBannerSimpleGenericComponent,
  ],
})
export class EsBannerModule {}
