import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideConfig,
} from '@spartacus/core';
import { GenericLinkModule, IconModule } from '@spartacus/storefront';
import { EsNavigationComponent } from './es-navigation.component';
import { EsCategoryNavigationUiComponent } from './es-category-navigation-ui/es-category-navigation-ui.component';
import { EsNavigationUiComponent } from './es-navigation-ui/es-navigation-ui.component';

@NgModule({
  declarations: [
    EsNavigationComponent,
    EsCategoryNavigationUiComponent,
    EsNavigationUiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule,
    GenericLinkModule,
    I18nModule,
    FeaturesConfigModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        //NavigationComponent: { component: EsNavigationComponent },
        CategoryNavigationComponent: {
          component: EsCategoryNavigationUiComponent,
        },
      },
    }),
  ],
  exports: [
    EsNavigationComponent,
    EsCategoryNavigationUiComponent,
    EsNavigationUiComponent,
  ],
})
export class EsNavigationModule {}
