import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanviarContrasenyaComponent } from './canviar-contrasenya.component';

describe('CanviarContrasenyaComponent', () => {
  let component: CanviarContrasenyaComponent;
  let fixture: ComponentFixture<CanviarContrasenyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanviarContrasenyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanviarContrasenyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
