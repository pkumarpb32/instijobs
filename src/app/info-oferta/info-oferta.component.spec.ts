import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoOfertaComponent } from './info-oferta.component';

describe('InfoOfertaComponent', () => {
  let component: InfoOfertaComponent;
  let fixture: ComponentFixture<InfoOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoOfertaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
