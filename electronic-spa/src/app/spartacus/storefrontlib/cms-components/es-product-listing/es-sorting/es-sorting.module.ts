import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { I18nModule } from '@spartacus/core';
import { NgSelectA11yModule } from '@spartacus/storefront';
import { EsSortingComponent } from './es-sorting.component';

@NgModule({
  declarations: [EsSortingComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgSelectModule,
    NgSelectA11yModule,
    I18nModule,
  ],
  exports: [EsSortingComponent],
})
export class EsSortingModule { }
