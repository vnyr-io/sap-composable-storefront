import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsProductDescComponent } from './es-product-desc.component';

describe('EsProductDescComponent', () => {
  let component: EsProductDescComponent;
  let fixture: ComponentFixture<EsProductDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsProductDescComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsProductDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
