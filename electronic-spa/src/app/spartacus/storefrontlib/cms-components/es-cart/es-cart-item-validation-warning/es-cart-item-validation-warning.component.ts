import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CartValidationFacade } from '@spartacus/cart/base/root';
import { ICON_TYPE } from '@spartacus/storefront';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-es-cart-item-validation-warning',
  standalone: false,
  templateUrl: './es-cart-item-validation-warning.component.html',
  styleUrl: './es-cart-item-validation-warning.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCartItemValidationWarningComponent {
  @Input() code?: string;

  iconTypes = ICON_TYPE;
  isVisible = true;

  cartModification$ = this.cartValidationFacade.getValidationResults().pipe(
    map((modificationList) =>
      modificationList.find(
        (modification) => modification.entry?.product?.code === this.code
      )
    )
  );

  constructor(protected cartValidationFacade: CartValidationFacade) {}
}
