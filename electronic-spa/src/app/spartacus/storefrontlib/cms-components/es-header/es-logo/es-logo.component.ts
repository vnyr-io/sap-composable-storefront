import { Component } from '@angular/core';
import {
  CmsBannerComponent,
  CmsService,
  OccConfig,
  SemanticPathService,
} from '@spartacus/core';
import { BannerComponent, CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-es-logo',
  standalone: false,
  templateUrl: './es-logo.component.html',
  styleUrl: './es-logo.component.scss',
})
export class EsLogoComponent extends BannerComponent {
  constructor(
    public config: OccConfig,
    component: CmsComponentData<CmsBannerComponent>,
    urlService: SemanticPathService,
    cmsService: CmsService
  ) {
    super(component, urlService, cmsService);
  }
}
