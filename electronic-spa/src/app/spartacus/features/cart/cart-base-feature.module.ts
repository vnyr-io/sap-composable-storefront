import { NgModule } from '@angular/core';
import {
  cartBaseTranslationChunksConfig,
  cartBaseTranslationsEn,
} from '@spartacus/cart/base/assets';
import {
  CART_BASE_FEATURE,
  CartBaseRootModule,
} from '@spartacus/cart/base/root';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';

@NgModule({
  declarations: [],
  imports: [CartBaseRootModule],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [CART_BASE_FEATURE]: {
          module: () =>
            import('@spartacus/cart/base').then((m) => m.CartBaseModule),
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: cartBaseTranslationsEn },
        chunks: cartBaseTranslationChunksConfig,
      },
    }),
  ],
})
export class CartBaseFeatureModule {}
