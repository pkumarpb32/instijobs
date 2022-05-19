import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormArray, FormControl ,AbstractControl, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from 'src/app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-alumne',
  templateUrl: './sign-up-alumne.component.html',
  styleUrls: ['./sign-up-alumne.component.css']
})
export class SignUpAlumneComponent implements OnInit {

  SignUpAlumneForm!: FormGroup;
  constructor(private router: Router, private _http:HttpClient, private formBuilder: FormBuilder, public dades: DataServiceService) { }

  ngOnInit(): void 
  {
    let date = new Date();
    // recuperar els cursos i els pobles
    this.dades.getCuros();
    this.dades.getPobles()
    this.SignUpAlumneForm = this.formBuilder.group({
      nom:['', Validators.required],
      cognoms:['', Validators.required],
      DNI:['',  Validators.required],
      any_finalitzacio:['', [Validators.required, Validators.min(1955), Validators.max(date.getFullYear())]],
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

  get f(): {[key: string]: AbstractControl} { // Getter 
    return this.SignUpAlumneForm.controls;
  }

  // Funció per guardar les dades d'un alumne a la base de dades
  onSubmit()
  {
    this.SignUpAlumneForm.markAllAsTouched();
    if(this.SignUpAlumneForm.invalid){
      return;
    }
    else{
      let current_dades = this.SignUpAlumneForm.value;
      current_dades['tipus_usuari'] = "alumne";
      this.dades.post('http://localhost:3000/api/registre', current_dades).subscribe((resposta) =>{
        this.dades.saveToken(resposta.dataUser.accessToken);
        alert("Login Successful!");
        this.router.navigate(['alumne']);
        },
        (error) => {                              //Error
          console.error(error.error)
          alert(error.error);
        }
      );
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
}
