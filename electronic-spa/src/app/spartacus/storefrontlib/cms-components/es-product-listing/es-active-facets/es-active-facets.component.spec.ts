import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FacetService } from '@spartacus/storefront';
import { EsActiveFacetsComponent } from './es-active-facets.component';

describe('EsActiveFacetsComponent', () => {
  let component: EsActiveFacetsComponent;
  let fixture: ComponentFixture<EsActiveFacetsComponent>;

  const facetServiceMock = {
    facetList$: of({ activeFacets: [], facets: [] }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EsActiveFacetsComponent],
      providers: [{ provide: FacetService, useValue: facetServiceMock }],
    })
      .overrideComponent(EsActiveFacetsComponent, {
        set: { template: '' },
      })
      .compileComponents();

    fixture = TestBed.createComponent(EsActiveFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
