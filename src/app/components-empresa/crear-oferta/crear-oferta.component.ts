import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.css']
})
export class CrearOfertaComponent implements OnInit {
  
  CrearOfertaForm!: FormGroup;
  constructor(public dades: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dades.getCuros();
    this.CrearOfertaForm = this.formBuilder.group({
      titol:['', Validators.required],
      tipus:['', Validators.required],
      descripcio:['', Validators.required],
      teletreball:['', Validators.required],
      salari:['', Validators.required],
      horari:['', Validators.required],
      tipus_contracte:['', Validators.required],
      experiencia_minima:['', Validators.required],
      estudis: this.formBuilder.array([], [Validators.required])

    });
  }

  get f(): {[key: string]: AbstractControl} { // Getter 
    return this.CrearOfertaForm.controls;
  }
  // Funció que retorna els curos seleccionats per l'alumne
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.CrearOfertaForm.get('estudis') as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }  
  
}
