import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FacetService } from '@spartacus/storefront';
import { EsFacetListComponent } from './es-facet-list.component';

describe('EsFacetListComponent', () => {
  let component: EsFacetListComponent;
  let fixture: ComponentFixture<EsFacetListComponent>;

  const facetServiceMock = {
    facetList$: of({ facets: [] }),
    toggle: jasmine.createSpy('toggle'),
    getState: jasmine.createSpy('getState').and.returnValue(of({})),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsFacetListComponent],
      providers: [{ provide: FacetService, useValue: facetServiceMock }],
    })
      .overrideComponent(EsFacetListComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(EsFacetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
