import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeAlumneComponent } from './home-alumne/home-alumne.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HomeProfeComponent } from './home-profe/home-profe.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'alumne', component: HomeAlumneComponent},
  {path: 'profe', component: HomeProfeComponent},
  {path: 'empresa', component: HomeEmpresaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
