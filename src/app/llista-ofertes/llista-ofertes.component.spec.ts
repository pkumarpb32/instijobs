import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LlistaOfertesComponent } from './llista-ofertes.component';

describe('LlistaOfertesComponent', () => {
  let component: LlistaOfertesComponent;
  let fixture: ComponentFixture<LlistaOfertesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LlistaOfertesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LlistaOfertesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
