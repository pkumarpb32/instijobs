import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl,FormBuilder} from '@angular/forms';
import { ActivatedRoute, ChildrenOutletContexts, Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-sign-up-empresa',
  templateUrl: './sign-up-empresa.component.html',
  styleUrls: ['./sign-up-empresa.component.css']
})
export class SignUpEmpresaComponent implements OnInit {

  SignUpEmpresaForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http: HttpClient, public dades: DataServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // obtenir els pobles
    this.dades.getPobles();
    this.SignUpEmpresaForm = this.formBuilder.group({
      nom:['', Validators.required],
      DNI:['',  Validators.required],
      email:['', Validators.required],
      poblacio:['', Validators.required],
      telefon:['', Validators.required],
      contrasenya:['', [Validators.required, Validators.minLength(8)]],
      recontrasenya:['', Validators.required],
      address:['', Validators.required]
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
    return this.SignUpEmpresaForm.controls;
  }

  // Funcio per guadar l'empresa a la base de dades
  onSubmit(){
    this.SignUpEmpresaForm.markAllAsTouched();
    if(this.SignUpEmpresaForm.invalid){
      return;
    }
    else{
      let current_dades = this.SignUpEmpresaForm.value;
      current_dades['tipus_usuari'] = "empresa";
      this.dades.signUp('http://localhost:3000/api/registre', current_dades).subscribe((resposta) =>{
        console.log(resposta['dataUser']);
        this.dades.email = current_dades['email'];
        this.router.navigate([{outlets: {outlet1:['confirm-email']}}], {relativeTo: this.route.parent});
        },
        (error) => {                              //Error
          console.error(error.error)
          alert(error.error);
        }
      );
    }
  }
}
