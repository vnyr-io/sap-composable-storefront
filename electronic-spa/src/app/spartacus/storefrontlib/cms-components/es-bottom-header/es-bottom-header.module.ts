import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CmsConfig, I18nModule, provideConfig } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { EsBottomHeaderComponent } from './es-bottom-header.component';



@NgModule({
  declarations: [
    EsBottomHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      cmsComponents: {
        BreadcrumbComponent: {
          component: EsBottomHeaderComponent,
        },
      },
    }),
  ],
  exports: [
    EsBottomHeaderComponent
  ]
})
export class EsBottomHeaderModule { }
