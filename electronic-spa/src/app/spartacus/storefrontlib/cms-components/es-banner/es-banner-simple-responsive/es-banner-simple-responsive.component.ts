import { Component } from '@angular/core';
import {
  CmsBannerComponent,
  CmsService,
  OccConfig,
  SemanticPathService,
} from '@spartacus/core';
import { BannerComponent, CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-es-banner-simple-responsive',
  standalone: false,
  templateUrl: './es-banner-simple-responsive.component.html',
  styleUrl: './es-banner-simple-responsive.component.scss',
})
export class EsBannerSimpleResponsiveComponent extends BannerComponent {
  constructor(
    public config: OccConfig,
    component: CmsComponentData<CmsBannerComponent>,
    urlService: SemanticPathService,
    cmsService: CmsService
  ) {
    super(component, urlService, cmsService);
  }

  getMediaUrl(media: unknown): string {
    const mediaData = media as {
      url?: string;
      desktop?: { url?: string };
      mobile?: { url?: string };
    };

    const mediaUrl = mediaData?.desktop?.url || mediaData?.url;
    return `${this.config.backend?.media?.baseUrl || ''}${mediaUrl || ''}`;
  }
}

