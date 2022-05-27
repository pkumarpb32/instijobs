import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaOfertesProfeComponent } from './llista-ofertes-profe.component';

describe('LlistaOfertesProfeComponent', () => {
  let component: LlistaOfertesProfeComponent;
  let fixture: ComponentFixture<LlistaOfertesProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaOfertesProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaOfertesProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
