import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmsNavigationComponent } from '@spartacus/core';
import { CmsComponentData, NavigationService } from '@spartacus/storefront';
import { of } from 'rxjs';

import { EsCategoryNavigationUiComponent } from './es-category-navigation-ui.component';

describe('EsCategoryNavigationUiComponent', () => {
  let component: EsCategoryNavigationUiComponent;
  let fixture: ComponentFixture<EsCategoryNavigationUiComponent>;

  beforeEach(async () => {
    const componentDataMock = {
      data$: of({ wrapAfter: '10', styleClass: '' } as CmsNavigationComponent),
    };
    const navigationServiceMock = {
      createNavigation: () => of({ children: [] }),
    };

    await TestBed.configureTestingModule({
      declarations: [EsCategoryNavigationUiComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CmsComponentData, useValue: componentDataMock },
        { provide: NavigationService, useValue: navigationServiceMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsCategoryNavigationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
