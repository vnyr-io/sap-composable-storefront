import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FacetListComponent, FacetService } from '@spartacus/storefront';

@Component({
  selector: 'app-es-facet-list',
  standalone: false,
  templateUrl: './es-facet-list.component.html',
  styleUrls: ['./es-facet-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'cx-facet-list',
    '(click)': 'handleClick()',
  },
})
export class EsFacetListComponent extends FacetListComponent {
  constructor(
    protected override facetService: FacetService,
    protected override elementRef: ElementRef,
    protected override renderer: Renderer2
  ) {
    super(facetService, elementRef, renderer);
  }
}
