import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsFooterComponent } from './es-footer.component';

describe('EsFooterComponent', () => {
  let component: EsFooterComponent;
  let fixture: ComponentFixture<EsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
