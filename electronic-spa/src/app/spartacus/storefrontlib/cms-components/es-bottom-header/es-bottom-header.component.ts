import { Component } from '@angular/core';
import { CmsBreadcrumbsComponent, PageMetaService } from '@spartacus/core';
import { CmsComponentData } from '@spartacus/storefront';
import { map } from 'rxjs';

@Component({
  selector: 'app-es-bottom-header',
  standalone: false,
  templateUrl: './es-bottom-header.component.html',
  styleUrl: './es-bottom-header.component.scss',
})
export class EsBottomHeaderComponent {
  component$ = this.component.data$;
  title$ = this.pageMeta
    .getMeta()
    .pipe(map((meta) => meta?.heading || meta?.title || ''));
  crumbs$ = this.pageMeta
    .getMeta()
    .pipe(map((meta) => meta?.breadcrumbs || []));

  constructor(
    private component: CmsComponentData<CmsBreadcrumbsComponent>,
    private pageMeta: PageMetaService
  ) {}
}
