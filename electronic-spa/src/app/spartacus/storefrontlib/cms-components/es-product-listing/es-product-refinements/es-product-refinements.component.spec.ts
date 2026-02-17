import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsProductRefinementsComponent } from './es-product-refinements.component';

describe('EsProductRefinementsComponent', () => {
  let component: EsProductRefinementsComponent;
  let fixture: ComponentFixture<EsProductRefinementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsProductRefinementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsProductRefinementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
