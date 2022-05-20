import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HomeAlumneComponent } from './home-alumne/home-alumne.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HomeProfeComponent } from './home-profe/home-profe.component';
import { SignUpAlumneComponent } from './sign-up-forms/sign-up-alumne/sign-up-alumne.component';
import { SignUpEmpresaComponent } from './sign-up-forms/sign-up-empresa/sign-up-empresa.component';
import { ConfirmEmailComponent } from './sign-up-forms/confirm-email/confirm-email.component';
import { CanviarContrasenyaComponent } from './canviar-contrasenya/canviar-contrasenya.component';
import { CrearOfertaComponent } from './components-empresa/crear-oferta/crear-oferta.component';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'canviar-contrasenya', component: CanviarContrasenyaComponent},
  {path: 'sign-up', component: SignUpComponent,
    children:[
      {path: 'sign-up-alumne', component: SignUpAlumneComponent, outlet: "outlet1"},
      {path: 'sign-up-empresa', component: SignUpEmpresaComponent, outlet: "outlet1" },
      {path: 'confirm-email', component: ConfirmEmailComponent, outlet: "outlet1" },
      {path: '', outlet: 'outlet1', component: SignUpAlumneComponent }
    ]
  },
  {path: 'alumne', component: HomeAlumneComponent, canActivate:[RoleGuard, AuthGuard], data:{expectedRole: 'alumne'}},
  {path: 'profe', component: HomeProfeComponent, canActivate:[RoleGuard, AuthGuard], data:{expectedRole: 'profe'}},
  {path: 'empresa', component: HomeEmpresaComponent, canActivate:[AuthGuard, RoleGuard], data:{expectedRole: 'empresa'},
    children:[
      {path: 'crear-oferta', outlet: 'outlet-empresa', component: CrearOfertaComponent}
    ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
