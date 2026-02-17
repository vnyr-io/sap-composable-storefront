import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SiteContextSelectorComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-es-site-context-selector',
  standalone: false,
  templateUrl: './es-site-context-selector.component.html',
  styleUrl: './es-site-context-selector.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsSiteContextSelectorComponent extends SiteContextSelectorComponent {
  get dropdownId(): string {
    const suffix = (this.context ?? 'context').toString().toLowerCase();
    return `es-site-context-selector-${suffix}`;
  }
}
