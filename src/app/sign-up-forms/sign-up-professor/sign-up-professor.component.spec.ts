import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpProfessorComponent } from './sign-up-professor.component';

describe('SignUpProfessorComponent', () => {
  let component: SignUpProfessorComponent;
  let fixture: ComponentFixture<SignUpProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
