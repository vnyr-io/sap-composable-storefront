import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { FeatureConfigService, WindowRef } from '@spartacus/core';
import {
  BreakpointService,
  HamburgerMenuService,
} from '@spartacus/storefront';
import { of } from 'rxjs';

import { EsNavigationUiComponent } from './es-navigation-ui.component';

describe('EsNavigationUiComponent', () => {
  let component: EsNavigationUiComponent;
  let fixture: ComponentFixture<EsNavigationUiComponent>;

  beforeEach(async () => {
    const routerMock = { events: of() };
    const hamburgerMenuServiceMock = { isExpanded: of(false), toggle: () => {} };
    const windowRefMock = { nativeWindow: { location: { href: '' } } };
    const featureConfigServiceMock = { isEnabled: () => false };
    const breakpointServiceMock = { isUp: () => of(false) };

    await TestBed.configureTestingModule({
      declarations: [EsNavigationUiComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerMock },
        { provide: HamburgerMenuService, useValue: hamburgerMenuServiceMock },
        { provide: WindowRef, useValue: windowRefMock },
        { provide: FeatureConfigService, useValue: featureConfigServiceMock },
        { provide: BreakpointService, useValue: breakpointServiceMock },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsNavigationUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
