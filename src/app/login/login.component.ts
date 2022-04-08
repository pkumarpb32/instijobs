import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    });
  }

  get f(): {[key: string]: AbstractControl} { // Getter per poder fer f.name en comptes de form.controls.username
    return this.loginForm.controls;
  }

  // Mèthode per iniciar la sessió
  login(){
    this.loginForm.markAllAsTouched();
    if(this.loginForm.invalid){
      return;
    }
    this._http.get<any>("http://localhost:3000/api/users").subscribe(res=>{
        const user = res.find((a:any)=>{
          return a.email === this.loginForm.value.email && a.contrasenya === this.loginForm.value.password;
        })
        if(user){
          alert("Login is Successfull");
          this.loginForm.reset();
          this.router.navigate([user.tipus_usuari]);
        }
        else{
          this.loginForm.controls['email'].setErrors({invalid: true});
        }
    })
  }

}
