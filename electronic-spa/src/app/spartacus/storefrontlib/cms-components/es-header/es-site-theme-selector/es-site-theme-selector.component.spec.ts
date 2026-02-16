import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsSiteThemeSelectorComponent } from './es-site-theme-selector.component';

describe('EsSiteThemeSelectorComponent', () => {
  let component: EsSiteThemeSelectorComponent;
  let fixture: ComponentFixture<EsSiteThemeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsSiteThemeSelectorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsSiteThemeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
