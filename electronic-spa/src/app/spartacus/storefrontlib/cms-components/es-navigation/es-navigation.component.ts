import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import {
  CmsComponentData,
  NavigationComponent,
  NavigationService,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-navigation',
  standalone: false,
  templateUrl: './es-navigation.component.html',
  styleUrl: './es-navigation.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsNavigationComponent extends NavigationComponent {
  constructor(
    componentData: CmsComponentData<CmsNavigationComponent>,
    service: NavigationService
  ) {
    super(componentData, service);
  }
}
