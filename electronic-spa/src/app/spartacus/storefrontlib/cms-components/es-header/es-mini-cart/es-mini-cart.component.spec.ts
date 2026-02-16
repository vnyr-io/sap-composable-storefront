import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsMiniCartComponent } from './es-mini-cart.component';

describe('EsMiniCartComponent', () => {
  let component: EsMiniCartComponent;
  let fixture: ComponentFixture<EsMiniCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsMiniCartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsMiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
