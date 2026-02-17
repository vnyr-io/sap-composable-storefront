import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsCarouselComponent } from './es-carousel.component';

describe('EsCarouselComponent', () => {
  let component: EsCarouselComponent;
  let fixture: ComponentFixture<EsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsCarouselComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
