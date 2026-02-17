import { Component, DestroyRef, inject } from '@angular/core';
import { StorefrontComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-es-storefront',
  standalone: false,
  templateUrl: './es-storefront.component.html',
  styleUrl: './es-storefront.component.scss',
})
export class EsStorefrontComponent extends StorefrontComponent {}
