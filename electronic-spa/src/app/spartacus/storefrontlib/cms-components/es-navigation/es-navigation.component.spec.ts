import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmsNavigationComponent } from '@spartacus/core';
import { CmsComponentData, NavigationService } from '@spartacus/storefront';
import { of } from 'rxjs';

import { EsNavigationComponent } from './es-navigation.component';

describe('EsNavigationComponent', () => {
  let component: EsNavigationComponent;
  let fixture: ComponentFixture<EsNavigationComponent>;

  beforeEach(async () => {
    const componentDataMock = {
      data$: of({ wrapAfter: '5' } as CmsNavigationComponent),
    };
    const navigationServiceMock = {
      createNavigation: () => of({ children: [] }),
    };

    await TestBed.configureTestingModule({
      declarations: [EsNavigationComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: CmsComponentData, useValue: componentDataMock },
        { provide: NavigationService, useValue: navigationServiceMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
