import { Component } from '@angular/core';
import { MiniCartComponent } from '@spartacus/cart/base/components/mini-cart';
import { MiniCartComponentService } from '@spartacus/cart/base/components/mini-cart';

@Component({
  selector: 'app-es-mini-cart',
  standalone: false,
  templateUrl: './es-mini-cart.component.html',
  styleUrl: './es-mini-cart.component.scss',
})
export class EsMiniCartComponent extends MiniCartComponent {
  constructor(miniCartComponentService: MiniCartComponentService) {
    super(miniCartComponentService);
  }
}
