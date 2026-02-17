import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActiveFacetsComponent, FacetService } from '@spartacus/storefront';

@Component({
  selector: 'app-es-active-facets',
  standalone: false,
  templateUrl: './es-active-facets.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  host: {
    class: 'cx-active-facets',
    '[attr.role]': 'role',
    '[attr.aria-labelledby]': 'labelledby',
  },
})
export class EsActiveFacetsComponent extends ActiveFacetsComponent {
  constructor(protected override facetService: FacetService) {
    super(facetService);
  }
}
