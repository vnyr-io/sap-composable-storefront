import { Component } from '@angular/core';
import {
  CmsSearchBoxComponent,
  RoutingService,
  WindowRef,
} from '@spartacus/core';
import {
  CmsComponentData,
  SearchBoxComponent,
  SearchBoxComponentService,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-search-box',
  standalone: false,
  templateUrl: './es-search-box.component.html',
  styleUrl: './es-search-box.component.scss',
})
export class EsSearchBoxComponent extends SearchBoxComponent {
  private timeout: ReturnType<typeof setTimeout> | null = null;

  constructor(
    searchBoxComponentService: SearchBoxComponentService,
    componentData: CmsComponentData<CmsSearchBoxComponent>,
    winRef: WindowRef,
    routingService: RoutingService
  ) {
    super(searchBoxComponentService, componentData, winRef, routingService);
  }

  override search(query: string): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }

    const normalized = (query ?? '').trim();
    if (normalized.length < 3) {
      this.close(true);
      return;
    }

    this.timeout = setTimeout(() => {
      super.search(normalized);
    }, 250);
  }

  closePanel(): void {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.close(true);
  }
}
