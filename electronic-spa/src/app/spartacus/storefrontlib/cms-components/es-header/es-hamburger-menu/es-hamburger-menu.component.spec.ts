import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HamburgerMenuService } from '@spartacus/storefront';

import { EsHamburgerMenuComponent } from './es-hamburger-menu.component';

describe('EsHamburgerMenuComponent', () => {
  let component: EsHamburgerMenuComponent;
  let fixture: ComponentFixture<EsHamburgerMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsHamburgerMenuComponent],
      providers: [
        {
          provide: HamburgerMenuService,
          useValue: {
            toggle: jasmine.createSpy('toggle'),
            isExpanded: jasmine.createSpy('isExpanded').and.returnValue(false),
          },
        },
      ],
    })
    .overrideTemplate(EsHamburgerMenuComponent, '')
    .compileComponents();

    fixture = TestBed.createComponent(EsHamburgerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
