import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsStorefrontComponent } from './es-storefront.component';

describe('EsStorefrontComponent', () => {
  let component: EsStorefrontComponent;
  let fixture: ComponentFixture<EsStorefrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsStorefrontComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsStorefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
