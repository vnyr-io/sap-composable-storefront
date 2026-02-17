import {
  Component,
  ElementRef,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { FeatureConfigService, WindowRef } from '@spartacus/core';
import {
  HamburgerMenuService,
  NavigationUIComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-navigation-ui',
  standalone: false,
  templateUrl: './es-navigation-ui.component.html',
  styleUrl: './es-navigation-ui.component.scss',
  encapsulation: ViewEncapsulation.None,
  inputs: [
    'node',
    'wrapAfter',
    'resetMenuOnClose',
    'focusableNodeTitles',
    'navAriaLabel',
    'flyout',
    'isOpen',
  ],
  host: {
    '(window:resize)': 'onResize()',
    '(document:keyDown.arrowUp)': 'onArrow($event)',
    '(document:keyDown.arrowDown)': 'onArrow($event)',
    '[class.flyout]': 'flyout',
    '[class.is-open]': 'isOpen',
  },
})
export class EsNavigationUiComponent extends NavigationUIComponent {
  constructor(
    router: Router,
    renderer: Renderer2,
    elemRef: ElementRef,
    hamburgerMenuService: HamburgerMenuService,
    winRef: WindowRef,
    featureConfigService: FeatureConfigService
  ) {
    super(
      router,
      renderer,
      elemRef,
      hamburgerMenuService,
      winRef,
      featureConfigService
    );
  }
}
