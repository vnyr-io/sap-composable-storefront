import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { SiteContextComponentService } from '@spartacus/storefront';
import { EsSiteContextSelectorComponent } from './es-site-context-selector.component';

describe('EsSiteContextSelectorComponent', () => {
  let component: EsSiteContextSelectorComponent;
  let fixture: ComponentFixture<EsSiteContextSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsSiteContextSelectorComponent],
      providers: [
        {
          provide: SiteContextComponentService,
          useValue: {
            getItems: () => of([{ isocode: 'en' }, { isocode: 'de' }]),
            getActiveItem: () => of('de'),
            getLabel: () => of('Language'),
            setActive: () => {},
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsSiteContextSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
