import { Component } from '@angular/core';
import { CmsService, WindowRef } from '@spartacus/core';
import {
  CmsComponentData,
  TabParagraphContainerComponent,
} from '@spartacus/storefront';

@Component({
  selector: 'app-es-tab-paragraph-container',
  standalone: false,
  templateUrl: './es-tab-paragraph-container.component.html',
  styleUrl: './es-tab-paragraph-container.component.scss',
})
export class EsTabParagraphContainerComponent extends TabParagraphContainerComponent {
  constructor(
    public override componentData: CmsComponentData<any>,
    public override cmsService: CmsService,
    public override winRef: WindowRef
  ) {
    super(componentData, cmsService, winRef);
  }
}
