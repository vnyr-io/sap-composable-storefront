import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsProductAddToCartComponent } from './es-product-add-to-cart.component';

describe('EsProductAddToCartComponent', () => {
  let component: EsProductAddToCartComponent;
  let fixture: ComponentFixture<EsProductAddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsProductAddToCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsProductAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
