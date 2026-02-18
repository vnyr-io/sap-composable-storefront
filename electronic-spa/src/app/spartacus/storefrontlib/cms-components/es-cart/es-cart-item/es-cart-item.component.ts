import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  CartItemComponentOptions,
  CartItemContext,
  CartOutlets,
  OrderEntry,
  PromotionLocation,
} from '@spartacus/cart/base/root';
import { useFeatureStyles } from '@spartacus/core';
import { ICON_TYPE } from '@spartacus/storefront';
import { EsCartItemContextSource } from './es-cart-item-context-source.model';

@Component({
  selector: 'app-es-cart-item',
  standalone: false,
  templateUrl: './es-cart-item.component.html',
  styleUrl: './es-cart-item.component.scss',
  providers: [
    EsCartItemContextSource,
    { provide: CartItemContext, useExisting: EsCartItemContextSource },
  ],
})
export class EsCartItemComponent implements OnChanges {
  @Input() compact = false;
  @Input() item!: OrderEntry;
  @Input() readonly = false;
  @Input() quantityControl!: UntypedFormControl;
  @Input() promotionLocation: PromotionLocation = PromotionLocation.ActiveCart;
  @Input() options: CartItemComponentOptions = {
    isSaveForLater: false,
    optionalBtn: null,
    displayAddToCart: false,
  };

  iconTypes = ICON_TYPE;
  readonly CartOutlets = CartOutlets;

  constructor(protected cartItemContextSource: EsCartItemContextSource) {
    useFeatureStyles('a11yQTY2Quantity');
    useFeatureStyles('a11yCroppedFocusRing');
  }

  ngOnChanges(changes?: SimpleChanges): void {
    if (changes?.['compact']) {
      this.cartItemContextSource.compact$.next(this.compact);
    }
    if (changes?.['readonly']) {
      this.cartItemContextSource.readonly$.next(this.readonly);
    }
    if (changes?.['item']) {
      this.cartItemContextSource.item$.next(this.item);
    }
    if (changes?.['quantityControl']) {
      this.cartItemContextSource.quantityControl$.next(this.quantityControl);
    }
    if (changes?.['promotionLocation']) {
      this.cartItemContextSource.location$.next(this.promotionLocation);
    }
    if (changes?.['options']) {
      this.cartItemContextSource.options$.next(this.options);
    }
  }

  isProductOutOfStock(product: any): boolean {
    return (
      product &&
      product.stock &&
      product.stock.stockLevelStatus === 'outOfStock'
    );
  }

  removeItem(): void {
    this.quantityControl.setValue(0);
    this.quantityControl.markAsDirty();
  }
}
