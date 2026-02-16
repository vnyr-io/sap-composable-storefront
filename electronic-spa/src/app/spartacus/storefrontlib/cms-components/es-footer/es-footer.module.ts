import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsFooterComponent } from './es-footer.component';
import { PageLayoutModule } from '@spartacus/storefront';


@NgModule({
  declarations: [
    EsFooterComponent
  ],
  imports: [
    CommonModule,
    PageLayoutModule
  ],
  exports: [
    EsFooterComponent
  ]
})
export class EsFooterModule { }
