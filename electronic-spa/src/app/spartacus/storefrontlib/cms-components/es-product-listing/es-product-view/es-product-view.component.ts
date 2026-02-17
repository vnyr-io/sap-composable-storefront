import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ICON_TYPE, ViewModes } from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-view',
  standalone: false,
  templateUrl: './es-product-view.component.html',
  styleUrl: './es-product-view.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsProductViewComponent {
  iconTypes = ICON_TYPE;

  @Input() mode: ViewModes = ViewModes.Grid;
  @Output() modeChange = new EventEmitter<ViewModes>();

  get buttonClass(): string {
    return this.mode === ViewModes.Grid ? 'cx-product-list' : 'cx-product-grid';
  }

  get viewMode(): ICON_TYPE.GRID | ICON_TYPE.LIST {
    return this.mode === ViewModes.Grid ? ICON_TYPE.LIST : ICON_TYPE.GRID;
  }

  changeMode(): void {
    this.modeChange.emit(
      this.mode === ViewModes.Grid ? ViewModes.List : ViewModes.Grid
    );
  }
}
