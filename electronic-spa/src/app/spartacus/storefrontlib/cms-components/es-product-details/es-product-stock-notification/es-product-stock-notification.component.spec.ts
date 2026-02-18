import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsProductStockNotificationComponent } from './es-product-stock-notification.component';

describe('EsProductStockNotificationComponent', () => {
  let component: EsProductStockNotificationComponent;
  let fixture: ComponentFixture<EsProductStockNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsProductStockNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsProductStockNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
