import { Component, ElementRef } from '@angular/core';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { AddedToCartDialogComponent } from '@spartacus/cart/base/components';
import { RoutingService } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  selector: 'app-es-cart-dialog',
  standalone: false,
  templateUrl: './es-cart-dialog.component.html',
  styleUrl: './es-cart-dialog.component.scss',
})
export class EsCartDialogComponent extends AddedToCartDialogComponent {
  constructor(
    protected override activeCartFacade: ActiveCartFacade,
    protected override launchDialogService: LaunchDialogService,
    protected override routingService: RoutingService,
    protected override el: ElementRef
  ) {
    super(activeCartFacade, launchDialogService, routingService, el);
  }
}
