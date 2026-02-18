import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsProductIntroComponent } from './es-product-intro.component';

describe('EsProductIntroComponent', () => {
  let component: EsProductIntroComponent;
  let fixture: ComponentFixture<EsProductIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsProductIntroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
