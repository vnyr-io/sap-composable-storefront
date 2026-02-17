import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  BreakpointService,
  ProductFacetNavigationComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-refinements',
  standalone: false,
  templateUrl: './es-product-refinements.component.html',
  styleUrl: './es-product-refinements.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsProductRefinementsComponent extends ProductFacetNavigationComponent {
  @ViewChild('trigger')
  override trigger!: ElementRef<HTMLElement>;

  constructor(protected override breakpointService: BreakpointService) {
    super(breakpointService);
  }
}
