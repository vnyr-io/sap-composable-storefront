import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { EsCartItemValidationWarningComponent } from './es-cart-item-validation-warning.component';

@NgModule({
  declarations: [EsCartItemValidationWarningComponent],
  imports: [CommonModule, I18nModule, IconModule],
  exports: [EsCartItemValidationWarningComponent],
})
export class EsCartItemValidationWarningModule {}
