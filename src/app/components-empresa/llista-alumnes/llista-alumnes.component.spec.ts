import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaAlumnesComponent } from './llista-alumnes.component';

describe('LlistaAlumnesComponent', () => {
  let component: LlistaAlumnesComponent;
  let fixture: ComponentFixture<LlistaAlumnesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaAlumnesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaAlumnesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
