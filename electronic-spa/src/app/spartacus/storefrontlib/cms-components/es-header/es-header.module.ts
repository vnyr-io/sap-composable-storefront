import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { MiniCartModule } from '@spartacus/cart/base/components/mini-cart';
import { EsHeaderComponent } from './es-header.component';
import {
  BannerModule,
  HamburgerMenuModule,
  IconModule,
  LinkModule,
  PageLayoutModule,
  PageSlotModule,
  SearchBoxModule,
  SiteContextSelectorModule,
  SiteThemeSwitcherModule,
} from '@spartacus/storefront';
import {
  CmsConfig,
  I18nModule,
  UrlModule,
  provideConfig,
} from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { EsSiteContextSelectorComponent } from './es-site-context-selector/es-site-context-selector.component';
import { EsSiteThemeSelectorComponent } from './es-site-theme-selector/es-site-theme-selector.component';
import { EsLoginComponent } from './es-login/es-login.component';
import { EsMiniCartComponent } from './es-mini-cart/es-mini-cart.component';
import { EsSearchBoxComponent } from './es-search-box/es-search-box.component';
import { EsLogoComponent } from './es-logo/es-logo.component';
import { EsLinksComponent } from './es-links/es-links.component';

@NgModule({
  declarations: [
    EsHeaderComponent,
    EsSiteContextSelectorComponent,
    EsSiteThemeSelectorComponent,
    EsLoginComponent,
    EsMiniCartComponent,
    EsSearchBoxComponent,
    EsLogoComponent,
    EsLinksComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    UrlModule,
    HamburgerMenuModule,
    SiteContextSelectorModule,
    SiteThemeSwitcherModule,
    IconModule,
    LinkModule,
    BannerModule,
    SearchBoxModule,
    MiniCartModule,
    NgbDropdownModule,
    PageLayoutModule,
    PageSlotModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        SimpleBannerComponent: { component: EsLogoComponent },
        LoginComponent: { component: EsLoginComponent },
        MiniCartComponent: { component: EsMiniCartComponent },
        SearchBoxComponent: { component: EsSearchBoxComponent },
        CMSLinkComponent: { component: EsLinksComponent },
        SiteThemeSwitcherComponent: {
          component: EsSiteThemeSelectorComponent,
        },
        CMSSiteContextComponent: {
          component: EsSiteContextSelectorComponent,
        },
        SiteContextComponent: {
          component: EsSiteContextSelectorComponent,
        },
      },
    }),
  ],
  exports: [
    EsHeaderComponent,
    EsSiteContextSelectorComponent,
    EsSiteThemeSelectorComponent,
    EsLoginComponent,
    EsMiniCartComponent,
    EsSearchBoxComponent,
    EsLogoComponent,
    EsLinksComponent,
  ],
})
export class EsHeaderModule {}
