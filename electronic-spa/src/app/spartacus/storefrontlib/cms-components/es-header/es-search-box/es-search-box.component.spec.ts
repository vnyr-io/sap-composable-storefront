import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSearchBoxComponent } from './es-search-box.component';

describe('EsSearchBoxComponent', () => {
  let component: EsSearchBoxComponent;
  let fixture: ComponentFixture<EsSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsSearchBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
