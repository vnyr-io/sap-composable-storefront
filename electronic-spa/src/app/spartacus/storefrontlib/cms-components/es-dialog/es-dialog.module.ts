import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIALOG_TYPE, IconModule } from '@spartacus/storefront';
import { provideConfig } from '@spartacus/core';
import { ES_DIALOG_CALLER, EsDialogComponent } from './es-dialog.component';

@NgModule({
  declarations: [EsDialogComponent],
  imports: [CommonModule, IconModule],
  providers: [
    provideConfig({
      launch: {
        [ES_DIALOG_CALLER]: {
          inlineRoot: true,
          component: EsDialogComponent,
          dialogType: DIALOG_TYPE.DIALOG,
        },
      },
    }),
  ],
})
export class EsDialogModule {}
