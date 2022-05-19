import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-canviar-contrasenya',
  templateUrl: './canviar-contrasenya.component.html',
  styleUrls: ['./canviar-contrasenya.component.css']
})
export class CanviarContrasenyaComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router, private dades: DataServiceService) { }
  ChangePwdForm!: FormGroup;
  element = true;
  ngOnInit(): void {

    this.ChangePwdForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      contrasenya:['', [Validators.required, Validators.minLength(8)]],
      recontrasenya:['', Validators.required],
      codi_activacio:['']
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

  get f(): {[key: string]: AbstractControl} { // Getter per poder fer f.name en comptes de form.controls.username
    return this.ChangePwdForm.controls;
  }

  onSubmit(){
    this.ChangePwdForm.markAllAsTouched();
    if(this.ChangePwdForm.invalid){
      return;
    }else{
      if(this.element){
        this.dades.changePassword(this.ChangePwdForm.value).subscribe(res=>{
          console.log(res);
          this.element = false;
        },
        (error)=>{
          alert(error.error);
        });
      }
      else{
        this.element = true;
        this.ChangePwdForm.controls['confirm_code'].setErrors({invalid: true});

      }
    }
  }
}
