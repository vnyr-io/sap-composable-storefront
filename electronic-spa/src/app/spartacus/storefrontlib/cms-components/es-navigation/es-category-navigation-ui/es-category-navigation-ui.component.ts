import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import {
  CategoryNavigationComponent,
  CmsComponentData,
  NavigationService,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-category-navigation',
  standalone: false,
  templateUrl: './es-category-navigation-ui.component.html',
  styleUrl: './es-category-navigation-ui.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsCategoryNavigationUiComponent extends CategoryNavigationComponent {
  constructor(
    componentData: CmsComponentData<CmsNavigationComponent>,
    service: NavigationService
  ) {
    super(componentData, service);
  }
}
