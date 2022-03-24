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
  {path: '', redirectTo: 'alumne', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'alumne', component: HomeAlumneComponent},
  {path: 'profe', component: HomeProfeComponent},
  {path: 'empresa', component: HomeEmpresaComponent},
  {path: 'sign-up-alumne', component: SignUpAlumneComponent},
  {path: 'sign-up-professor', component: SignUpProfessorComponent},
  { path: "sign-up-empresa", component: SignUpEmpresaComponent, outlet: "outlet1" }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
