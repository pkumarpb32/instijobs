import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAlumneComponent } from './home-alumne.component';

describe('HomeAlumneComponent', () => {
  let component: HomeAlumneComponent;
  let fixture: ComponentFixture<HomeAlumneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAlumneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAlumneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
