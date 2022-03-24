import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpEmpresaComponent } from './sign-up-empresa.component';

describe('SignUpEmpresaComponent', () => {
  let component: SignUpEmpresaComponent;
  let fixture: ComponentFixture<SignUpEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpEmpresaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
