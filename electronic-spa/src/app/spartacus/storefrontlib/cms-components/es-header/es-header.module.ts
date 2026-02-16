import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EsHeaderComponent } from './es-header.component';
import {
  PageLayoutModule,
  PageSlotModule,
  GlobalMessageComponentModule
} from '@spartacus/storefront';


@NgModule({
  declarations: [
    EsHeaderComponent
  ],
  imports: [
    CommonModule,
    PageLayoutModule,
    PageSlotModule,
    GlobalMessageComponentModule
  ],
  exports: [
    EsHeaderComponent
  ]
})
export class EsHeaderModule { }
