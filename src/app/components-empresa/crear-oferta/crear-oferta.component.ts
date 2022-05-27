import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-crear-oferta',
  templateUrl: './crear-oferta.component.html',
  styleUrls: ['./crear-oferta.component.css']
})
export class CrearOfertaComponent implements OnInit {
  
  CrearOfertaForm!: FormGroup;
  tipus: string = " ";
  constructor(public dades: DataServiceService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.dades.getCuros();
    this.CrearOfertaForm = this.formBuilder.group({
      titol:['', Validators.required],
      tipus:['', Validators.required],
      descripcio:['', Validators.required],
      teletreball:['',Validators.required],
      salari:[''],
      jornada:['', Validators.required],
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

  // Funció per guarda la oferta
  onSubmit(){
    this.CrearOfertaForm.markAllAsTouched();
    if(this.CrearOfertaForm.invalid){
      return;
    }
    else{
      // comprovar el tipus de oferta
      if(this.tipus === 'fct'){
        const dades = {
          titol : this.f['titol'].value,
          descripcio : this.f['descripcio'].value,
          teletreball : this.f['teletreball'].value,
          curs : this.f['estudis_fct'].value
        }
        this.dades.addFCT(dades).subscribe(resposta=>{
        this.router.navigate([{outlets: {'outlet-empresa' :['llista-oferta']}}], {relativeTo: this.route.parent});
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
          jornada: this.f['jornada'].value,
          salari: this.f['salari'].value,
          tipus_contracte: this.f['tipus_contracte'].value
        }
        this.dades.addFeina(dades).subscribe(resposta=>{
        this.router.navigate([{outlets: {'outlet-empresa' :['llista-oferta']}}], {relativeTo: this.route.parent});
        },
          (error)=>{
            alert(error.error);
        });
      }
    }
  }
  
  // Funció per mostrar els camps del formulari segons el tipus de oferta
  onChange(event: any){
    this.tipus = event.target.value;
    if(this.tipus === 'fct'){
      this.CrearOfertaForm.controls["jornada"].clearValidators();
      this.CrearOfertaForm.controls["tipus_contracte"].clearValidators();
      this.CrearOfertaForm.controls["experiencia_minima"].clearValidators();
      this.CrearOfertaForm.controls["estudis"].clearValidators();
      this.CrearOfertaForm.controls["estudis_fct"].setValidators(Validators.required);
    }
    else{
      this.CrearOfertaForm.controls["jornada"].setValidators(Validators.required);
      this.CrearOfertaForm.controls["tipus_contracte"].setValidators(Validators.required);
      this.CrearOfertaForm.controls['experiencia_minima'].setValidators(Validators.required);
      this.CrearOfertaForm.controls["estudis"].setValidators(Validators.required);
      this.CrearOfertaForm.controls["estudis_fct"].clearValidators();
     }
     this.CrearOfertaForm.controls["jornada"].updateValueAndValidity();
     this.CrearOfertaForm.controls["tipus_contracte"].updateValueAndValidity();
     this.CrearOfertaForm.controls["experiencia_minima"].updateValueAndValidity();
     this.CrearOfertaForm.controls["estudis"].updateValueAndValidity();
     this.CrearOfertaForm.controls["estudis_fct"].updateValueAndValidity();   
  }
}
