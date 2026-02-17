import { Component } from '@angular/core';
import {
  CmsBannerComponent,
  CmsService,
  OccConfig,
  SemanticPathService,
} from '@spartacus/core';
import { BannerComponent, CmsComponentData } from '@spartacus/storefront';

@Component({
  selector: 'app-es-banner-simple-generic',
  standalone: false,
  templateUrl: './es-banner-simple-generic.component.html',
  styleUrl: './es-banner-simple-generic.component.scss',
})
export class EsBannerSimpleGenericComponent extends BannerComponent {
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

    const mediaUrl =
      mediaData?.desktop?.url || mediaData?.mobile?.url || mediaData?.url;
    return `${this.config.backend?.media?.baseUrl || ''}${mediaUrl || ''}`;
  }
}

