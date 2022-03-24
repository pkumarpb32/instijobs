import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpAlumneComponent } from './sign-up-alumne.component';

describe('SignUpAlumneComponent', () => {
  let component: SignUpAlumneComponent;
  let fixture: ComponentFixture<SignUpAlumneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpAlumneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpAlumneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
