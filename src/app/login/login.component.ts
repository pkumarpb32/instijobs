import { Component, OnInit } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private _http:HttpClient, private router:Router, private dades: DataServiceService) { }

  ngOnInit(): void {

    if(Object.keys(this.dades.getToken()).length != 0){       
      this.dades.verifyToken().subscribe(res =>{
          this.router.navigate([res.dataUser.tipus_usuari]);
        }, 
        (error)=>{
          console.log(error.error);
        }
      );
    }
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
      this.loginForm.controls['email'].setErrors({invalid: true});
      return;
    }
    this.dades.post("http://localhost:3000/api/login", this.loginForm.value).subscribe(res=>{
        if(res.dataUser != null){
          this.dades.saveToken(res.dataUser.accessToken);
          alert("Login is Successfull");
          this.loginForm.reset();
          this.router.navigate([res.dataUser.tipus_usuari]);
        }
    },
      (error)=>{
          console.log(error);
          if(error.status === 403){
            alert(error.error);
            // this.router.navigate(["sign-up/(outlet1:confirm-email)"]);
            this.dades.email = this.loginForm.value['email'];
            this.router.navigate(["sign-up",{outlets: {outlet1:['confirm-email']}}]);

          }
          else if(error.status === 401){
            this.loginForm.controls['email'].setErrors({invalid: true});
          }
      }
    );
  }

}
