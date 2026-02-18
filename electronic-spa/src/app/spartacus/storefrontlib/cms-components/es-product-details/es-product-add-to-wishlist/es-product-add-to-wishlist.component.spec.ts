import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsProductAddToWishlistComponent } from './es-product-add-to-wishlist.component';

describe('EsProductAddToWishlistComponent', () => {
  let component: EsProductAddToWishlistComponent;
  let fixture: ComponentFixture<EsProductAddToWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsProductAddToWishlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsProductAddToWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
