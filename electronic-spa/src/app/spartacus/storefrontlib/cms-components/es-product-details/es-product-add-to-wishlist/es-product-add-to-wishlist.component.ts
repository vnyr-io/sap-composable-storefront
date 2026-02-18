import { Component } from '@angular/core';
import { AddToWishListComponent } from '@spartacus/cart/wish-list/components/add-to-wishlist';
import { WishListFacade } from '@spartacus/cart/wish-list/root';
import { AuthService } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-add-to-wishlist',
  standalone: false,
  templateUrl: './es-product-add-to-wishlist.component.html',
  styleUrl: './es-product-add-to-wishlist.component.scss'
})
export class EsProductAddToWishlistComponent extends AddToWishListComponent {
  constructor(
    protected override wishListFacade: WishListFacade,
    protected override currentProductService: CurrentProductService,
    protected override authService: AuthService
  ) {
    super(wishListFacade, currentProductService, authService);
  }
}
