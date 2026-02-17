import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CmsComponentData } from '@spartacus/storefront';
import { of } from 'rxjs';
import { EsLinksComponent } from './es-links.component';

describe('EsLinksComponent', () => {
  let component: EsLinksComponent;
  let fixture: ComponentFixture<EsLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsLinksComponent],
      providers: [
        {
          provide: CmsComponentData,
          useValue: {
            data$: of({}),
          },
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
