import { Component, OnInit } from '@angular/core';
import { Curs } from 'src/app/Classes/Curs';
import { HttpClient } from '@angular/common/http';
import { Poble } from 'src/app/Classes/Poble';
import { FormBuilder, FormArray, FormControl ,AbstractControl, FormGroup, Validators } from '@angular/forms';
import { Alumne } from 'src/app/Classes/Alumne';
import { Observable } from 'rxjs';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-sign-up-alumne',
  templateUrl: './sign-up-alumne.component.html',
  styleUrls: ['./sign-up-alumne.component.css']
})
export class SignUpAlumneComponent implements OnInit {

  SignUpAlumneForm!: FormGroup;
  constructor(private _http:HttpClient, private formBuilder: FormBuilder, private dades: DataServiceService) { }
  cursos: Curs[] = [];
  pobles: Poble[] = [];

  ngOnInit(): void 
  {
    // recuperar els cursos i els pobles
    this.getCuros();
    this.getPobles()
    this.SignUpAlumneForm = this.formBuilder.group({
      nom:['', Validators.required],
      cognoms:['', Validators.required],
      DNI:['',  Validators.required],
      any_finalitzacio:['', Validators.required],
      email:['', Validators.required],
      poblacio:['', Validators.required],
      telefon:['', Validators.required],
      contrasenya:['', [Validators.required, Validators.minLength(8)]],
      recontrasenya:['', Validators.required],
      estudis: this.formBuilder.array([], [Validators.required])
    }, 
    {
      // Validator per validar la contrasenya
      validators: this.MustMatch('contrasenya', 'recontrasenya')
    });
  }
  // Funció per comprovar que les dues contrasenyes siguin iguals
  MustMatch(controlName: string, matchingControlName: string){
    return(formGroup: FormGroup)=>{
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if(matchingControl.errors && !matchingControl.errors?.['MustMatch']){
        return
      }
      if(control.value != matchingControl.value){
        matchingControl.setErrors({MustMatch:true});
      }
      else{
        matchingControl.setErrors(null);
      }
    }
  }
  // Funció que retorna els cursos
  getCuros(): void{
    this._http.get<any>("http://localhost:3000/api/cursos").subscribe(res=>{
      this.cursos = res;
    });
  }

  // Funció que retorna els pobles
  getPobles(): void{
    this._http.get<any>("http://localhost:3000/api/pobles").subscribe(res=>{
      this.pobles = res;
    });
  }
  get f(): {[key: string]: AbstractControl} { // Getter 
    return this.SignUpAlumneForm.controls;
  }

  // Funció per guardar les dades d'un alumne a la base de dades
  onSubmit(){
    this.SignUpAlumneForm.markAllAsTouched();
    if(this.SignUpAlumneForm.invalid){
      return;
    }
    else{
     alert("DONE");
      let alum : Alumne = new Alumne();
      let current_dades = this.SignUpAlumneForm.value;

    // alum = current_dades;
      alum.nom = current_dades.nom;
      alum.cognoms = current_dades.cognoms;
      alum.email = current_dades.email;
      alum.telefon = current_dades.telefon;
      alum.DNI = current_dades.DNI;
      alum.any_finalitzacio = current_dades.any_finalitzacio;
      alum.poblacio=  current_dades.poblacio;

      this.dades.post('http://localhost:3000/api/registre', alum).subscribe(resposta =>{
      console.log(alum);
      })
   }
  }

  // Funció que retorna els curos seleccionats per l'alumne
  onCheckboxChange(e: any) {
    const checkArray: FormArray = this.SignUpAlumneForm.get('estudis') as FormArray;
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
  
  // Funció per afegir un alumne a la base de dades
  addPerson(person:Alumne): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(person);
    return this._http.post('http://localhost:3000/api/registre', body);
  }
  
}
