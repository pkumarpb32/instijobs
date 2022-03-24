import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOfertaComponent } from './search-oferta.component';

describe('SearchOfertaComponent', () => {
  let component: SearchOfertaComponent;
  let fixture: ComponentFixture<SearchOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
