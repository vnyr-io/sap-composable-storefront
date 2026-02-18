import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsProductImagesComponent } from './es-product-images.component';

describe('EsProductImagesComponent', () => {
  let component: EsProductImagesComponent;
  let fixture: ComponentFixture<EsProductImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsProductImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsProductImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
