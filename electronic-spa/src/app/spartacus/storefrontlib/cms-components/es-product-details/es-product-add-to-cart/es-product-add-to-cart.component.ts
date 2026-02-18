import { ChangeDetectorRef, Component, Optional } from '@angular/core';
import { AddToCartComponent } from '@spartacus/cart/base/components/add-to-cart';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { CmsAddToCartComponent, EventService } from '@spartacus/core';
import {
  CmsComponentData,
  CurrentProductService,
  ProductListItemContext,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-add-to-cart',
  standalone: false,
  templateUrl: './es-product-add-to-cart.component.html',
  styleUrl: './es-product-add-to-cart.component.scss'
})
export class EsProductAddToCartComponent extends AddToCartComponent {
  constructor(
    protected override currentProductService: CurrentProductService,
    protected override cd: ChangeDetectorRef,
    protected override activeCartService: ActiveCartFacade,
    protected override component: CmsComponentData<CmsAddToCartComponent>,
    protected override eventService: EventService,
    @Optional()
    protected override productListItemContext?: ProductListItemContext
  ) {
    super(
      currentProductService,
      cd,
      activeCartService,
      component,
      eventService,
      productListItemContext
    );
  }
}
