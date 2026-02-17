import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginationComponent, PaginationBuilder } from '@spartacus/storefront';

@Component({
  selector: 'app-es-pagination',
  standalone: false,
  templateUrl: './es-pagination.component.html',
  styleUrl: './es-pagination.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EsPaginationComponent extends PaginationComponent {
  constructor(
    paginationBuilder: PaginationBuilder,
    activatedRoute: ActivatedRoute
  ) {
    super(paginationBuilder, activatedRoute);
  }
}
