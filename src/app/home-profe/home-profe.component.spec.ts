import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProfeComponent } from './home-profe.component';

describe('HomeProfeComponent', () => {
  let component: HomeProfeComponent;
  let fixture: ComponentFixture<HomeProfeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProfeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeProfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
