import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LaunchDialogService } from '@spartacus/storefront';

export const ES_DIALOG_CALLER = 'ES_DIALOG';

interface EsGenericDialogAction {
  label: string;
  reason?: string;
}

interface EsGenericDialogData {
  title?: string;
  message?: string;
  primaryAction?: EsGenericDialogAction;
  secondaryAction?: EsGenericDialogAction;
}

@Component({
  selector: 'app-es-dialog',
  standalone: false,
  templateUrl: './es-dialog.component.html',
  styleUrl: './es-dialog.component.scss',
})
export class EsDialogComponent implements OnInit, OnDestroy {
  data: EsGenericDialogData = {};
  protected subscription = new Subscription();

  constructor(protected launchDialogService: LaunchDialogService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.launchDialogService.data$.subscribe((dialogData) => {
        this.data = (dialogData || {}) as EsGenericDialogData;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  dismissModal(reason: string): void {
    this.launchDialogService.closeDialog(reason);
  }

  runAction(action?: EsGenericDialogAction): void {
    this.dismissModal(action?.reason || action?.label || 'dialog-action');
  }
}
