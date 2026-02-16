import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { provideHttpClient, withFetch, withInterceptorsFromDi } from "@angular/common/http";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AppRoutingModule } from "@spartacus/storefront";
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { EsStorefrontModule } from './spartacus/storefrontlib/cms-components/es-storefront/es-storefront.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    AppRoutingModule,
    EffectsModule.forRoot([]),
    SpartacusModule,
    EsStorefrontModule
  ],
  providers: [provideHttpClient(withFetch(), withInterceptorsFromDi())],
  bootstrap: [AppComponent]
})
export class AppModule { }
