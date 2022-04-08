import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeAlumneComponent } from './home-alumne/home-alumne.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HomeProfeComponent } from './home-profe/home-profe.component';
import { SignUpAlumneComponent } from './sign-up-forms/sign-up-alumne/sign-up-alumne.component';
import { SignUpEmpresaComponent } from './sign-up-forms/sign-up-empresa/sign-up-empresa.component';
import { SignUpProfessorComponent } from './sign-up-forms/sign-up-professor/sign-up-professor.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent,
    children:[
      {path: 'sign-up-alumne', component: SignUpAlumneComponent, outlet: "outlet1"},
      {path: 'sign-up-professor', component: SignUpProfessorComponent, outlet: "outlet1"},
      {path: 'sign-up-empresa', component: SignUpEmpresaComponent, outlet: "outlet1" },
      {path: '', outlet: 'outlet1', component: SignUpAlumneComponent }
    ]
  },
  {path: 'alumne', component: HomeAlumneComponent},
  {path: 'profe', component: HomeProfeComponent},
  {path: 'empresa', component: HomeEmpresaComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
