import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSortingComponent } from './es-sorting.component';

describe('EsSortingComponent', () => {
  let component: EsSortingComponent;
  let fixture: ComponentFixture<EsSortingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsSortingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsSortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
