import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KeyboardFocusModule } from '@spartacus/storefront';
import { EsPaginationComponent } from './es-pagination.component';

@NgModule({
  declarations: [EsPaginationComponent],
  imports: [
    CommonModule,
    RouterModule,
    KeyboardFocusModule,
  ],
  exports: [EsPaginationComponent],
})
export class EsPaginationModule {}
