import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsLoginComponent } from './es-login.component';

describe('EsLoginComponent', () => {
  let component: EsLoginComponent;
  let fixture: ComponentFixture<EsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
