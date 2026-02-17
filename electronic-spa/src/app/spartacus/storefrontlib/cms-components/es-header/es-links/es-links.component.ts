import { Component } from '@angular/core';
import { CmsLinkComponent } from '@spartacus/core';
import { CmsComponentData, LinkComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-es-links',
  standalone: false,
  templateUrl: './es-links.component.html',
  styleUrl: './es-links.component.scss',
})
export class EsLinksComponent extends LinkComponent {
  constructor(component: CmsComponentData<CmsLinkComponent>) {
    super(component);
  }
}
