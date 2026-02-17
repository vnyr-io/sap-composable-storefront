import { ChangeDetectionStrategy, Component } from '@angular/core';
import { StarRatingComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-es-star-rating',
  standalone: false,
  templateUrl: './es-star-rating.component.html',
  styleUrl: './es-star-rating.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsStarRatingComponent extends StarRatingComponent {}
