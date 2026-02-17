import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsBottomHeaderComponent } from './es-bottom-header.component';

describe('EsBottomHeaderComponent', () => {
  let component: EsBottomHeaderComponent;
  let fixture: ComponentFixture<EsBottomHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsBottomHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsBottomHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
