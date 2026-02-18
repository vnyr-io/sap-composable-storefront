import { Component } from '@angular/core';
import { EventService, TranslationService, WindowRef } from '@spartacus/core';
import {
  CurrentProductService,
  ProductIntroComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-product-intro',
  standalone: false,
  templateUrl: './es-product-intro.component.html',
  styleUrl: './es-product-intro.component.scss',
})
export class EsProductIntroComponent extends ProductIntroComponent {
  constructor(
    protected override currentProductService: CurrentProductService,
    protected override translationService: TranslationService,
    protected override winRef: WindowRef,
    protected override eventService: EventService
  ) {
    super(currentProductService, translationService, winRef, eventService);
  }

  override showReviews(): void {
    this.translationService
      .translate(this.reviewsTranslationKey)
      .subscribe((reviewsTabLabel) => {
        const tabsComponent = this.getEsTabsComponent();
        const reviewsTab =
          tabsComponent && this.getEsTabByLabel(reviewsTabLabel, tabsComponent);

        if (reviewsTab) {
          this.clickEsTabIfInactive(reviewsTab);
          setTimeout(() => {
            reviewsTab.scrollIntoView({ behavior: 'smooth', block: 'start' });
            reviewsTab.focus({ preventScroll: true });
          });
        }
      })
      .unsubscribe();
  }

  private getEsTabsComponent(): HTMLElement | null {
    return (
      this.winRef.document.querySelector('app-es-tab-paragraph-container') ||
      this.winRef.document.querySelector('cx-tab-paragraph-container')
    );
  }

  private clickEsTabIfInactive(tab: Element): void {
    if (
      !tab.classList.contains('active') ||
      tab.classList.contains('toggled')
    ) {
      (tab as HTMLElement).click();
    }
  }

  private getEsTabByLabel(
    label: string,
    tabsComponent: HTMLElement
  ): HTMLElement | undefined {
    const tabElements = tabsComponent.getElementsByTagName('button');
    return Array.from(tabElements).find((buttonElement) =>
      buttonElement.innerHTML.includes(label)
    );
  }
}
