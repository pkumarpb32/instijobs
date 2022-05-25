import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  ConfirmEmailForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private dades: DataServiceService, private router: Router) { }

  ngOnInit(): void {
    this.ConfirmEmailForm = this.formBuilder.group({
      confirm_code:['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]]
    })
  }

  get f(): {[key: string]: AbstractControl} { // Getter 
    return this.ConfirmEmailForm.controls;
  }
  onSubmit(){
    this.ConfirmEmailForm.markAllAsTouched();
    if(this.ConfirmEmailForm.invalid){
      return;
    }
    else{
      let body = this.ConfirmEmailForm.value;
      body['email'] = this.dades.email;
      this.dades.activateAccount(body).subscribe(res =>{
        this.dades.saveToken(res.dataUser.accessToken);
        alert("Sign-up is Successfull");
        this.dades.email = " ";
        this.router.navigate([res.dataUser.tipus_usuari]);
      },
      (error) => {                              //Error
        console.error(error.error);
        this.ConfirmEmailForm.controls['confirm_code'].setErrors({invalid: true});
      });
    }
  
  }

}
