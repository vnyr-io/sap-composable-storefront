import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsLogoComponent } from './es-logo.component';

describe('EsLogoComponent', () => {
  let component: EsLogoComponent;
  let fixture: ComponentFixture<EsLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
