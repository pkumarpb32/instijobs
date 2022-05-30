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
import { LlistaOfertesComponent } from './llista-ofertes/llista-ofertes.component';
import { InfoOfertaComponent } from './info-oferta/info-oferta.component';
import { LlistaOfertesProfeComponent } from './llista-ofertes-profe/llista-ofertes-profe.component';
import { LlistaAlumnesComponent } from './components-empresa/llista-alumnes/llista-alumnes.component';

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
  {path: 'alumne', component: HomeAlumneComponent, canActivate:[RoleGuard, AuthGuard], data:{expectedRole: 'alumne'},
    children:[
      {path: 'llista-oferta', outlet: 'outlet-alumne', component: LlistaOfertesComponent },
      {path: 'info-oferta/:id', outlet: 'outlet-alumne', component: InfoOfertaComponent},
      {path: '', outlet: 'outlet-alumne', component: LlistaOfertesComponent }
    ]},
  {path: 'profe', component: HomeProfeComponent, canActivate:[RoleGuard, AuthGuard], data:{expectedRole: 'profe'},
    children:[
      {path: 'llista-oferta-profe', outlet: 'outlet-profe', component: LlistaOfertesProfeComponent},
      {path: 'info-oferta/:id', outlet: 'outlet-profe', component: InfoOfertaComponent},
      
      {path: '', outlet: 'outlet-profe', component: LlistaOfertesProfeComponent }
    ]
  },
  {path: 'empresa', component: HomeEmpresaComponent, canActivate:[AuthGuard, RoleGuard], data:{expectedRole: 'empresa'},
    children:[
      {path: 'crear-oferta', outlet: 'outlet-empresa', component: CrearOfertaComponent},
      {path: 'info-oferta/:id', outlet: 'outlet-empresa', component: InfoOfertaComponent},
      {path: 'llista-oferta', outlet: 'outlet-empresa', component: LlistaOfertesProfeComponent},
      {path: 'llista-alumnes', outlet: 'outlet-empresa', component: LlistaAlumnesComponent},
      {path: '', outlet: 'outlet-empresa', component: LlistaOfertesProfeComponent }
    ]
  },
  {path: '', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
