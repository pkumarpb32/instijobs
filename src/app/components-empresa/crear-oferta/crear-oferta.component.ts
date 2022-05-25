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
  tipus: string = " ";
  constructor(public dades: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dades.getCuros();
    this.CrearOfertaForm = this.formBuilder.group({
      titol:['', Validators.required],
      tipus:['', Validators.required],
      descripcio:['', Validators.required],
      teletreball:['',Validators.required],
      salari:[''],
      horari:['', Validators.required],
      tipus_contracte:['', Validators.required],
      experiencia_minima:['', Validators.required],
      estudis: this.formBuilder.array([], [Validators.required]),
      estudis_fct: ['', Validators.required]
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
  onSubmit(){
    this.CrearOfertaForm.markAllAsTouched();
    if(this.CrearOfertaForm.invalid){
      return;
    }
    else{
      if(this.tipus === 'fct'){
        const dades = {
          titol : this.f['titol'].value,
          descripcio : this.f['descripcio'].value,
          teletreball : this.f['teletreball'].value,
          curs : this.f['estudis_fct'].value
        }
        this.dades.addFCT(dades).subscribe(resposta=>{
          console.log(resposta);
        },
          (error)=>{
            alert(error.error);
        });
      }
      else{
        const dades = {
          titol : this.f['titol'].value,
          descripcio : this.f['descripcio'].value,
          teletreball : this.f['teletreball'].value,
          curs : this.f['estudis'].value,
          experiencia_minima: this.f['experiencia_minima'].value,
          horari: this.f['horari'].value,
          salari: this.f['salari'].value,
          tipus_contracte: this.f['tipus_contracte'].value
        }
        this.dades.addFeina(dades).subscribe(resposta=>{
          console.log(resposta);
        },
          (error)=>{
            alert(error.error);
        });
      }
    }
  }
  
  onChange(event: any){
    this.tipus = event.target.value;
    if(this.tipus === 'fct'){
      this.CrearOfertaForm.controls["horari"].clearValidators();
      this.CrearOfertaForm.controls["tipus_contracte"].clearValidators();
      this.CrearOfertaForm.controls["experiencia_minima"].clearValidators();
      this.CrearOfertaForm.controls["estudis"].clearValidators();
      this.CrearOfertaForm.controls["estudis_fct"].setValidators(Validators.required);
    }
    else{
      this.CrearOfertaForm.controls["horari"].setValidators(Validators.required);
      this.CrearOfertaForm.controls["tipus_contracte"].setValidators(Validators.required);
      this.CrearOfertaForm.controls['experiencia_minima'].setValidators(Validators.required);
      this.CrearOfertaForm.controls["estudis"].setValidators(Validators.required);
      this.CrearOfertaForm.controls["estudis_fct"].clearValidators();
     }
     this.CrearOfertaForm.controls["horari"].updateValueAndValidity();
     this.CrearOfertaForm.controls["tipus_contracte"].updateValueAndValidity();
     this.CrearOfertaForm.controls["experiencia_minima"].updateValueAndValidity();
     this.CrearOfertaForm.controls["estudis"].updateValueAndValidity();
     this.CrearOfertaForm.controls["estudis_fct"].updateValueAndValidity();  
     console.log("updated")   
  }
}
