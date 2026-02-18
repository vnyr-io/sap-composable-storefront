import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from '@spartacus/assets';
import { customLayoutConfig } from '../shared/layout.config';
import { environment } from 'src/environments/environment';
import {
  I18nConfig,
  OccConfig,
  provideConfig,
  SiteContextConfig,
} from '@spartacus/core';
import {
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
} from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(customLayoutConfig),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          prefix: '/occ/v2/',
          endpoints: {
            product: {
              variants:
                'products/${productCode}?fields=baseOptions,baseProduct,variantOptions,variantType',
            },
          },
        },
        media: {
          baseUrl: environment.occBaseUrl,
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['electronics-spa'],
        language: ['en', 'de', 'zh', 'ja'],
        currency: ['USD', 'JPY'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: translationsEn },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig({
      checkout: {
        guest: true,
      },
    }),
    provideConfig({
      asm: {
        userIdHttpHeader: {
          enable: true,
        },
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
