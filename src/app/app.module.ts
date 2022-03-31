import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeProfeComponent } from './home-profe/home-profe.component';
import { HomeAlumneComponent } from './home-alumne/home-alumne.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HeaderComponent } from './header/header.component';
import { SearchOfertaComponent } from './search-oferta/search-oferta.component';
import { SignUpAlumneComponent } from './sign-up-forms/sign-up-alumne/sign-up-alumne.component';
import { SignUpProfessorComponent } from './sign-up-forms/sign-up-professor/sign-up-professor.component';
import { SignUpEmpresaComponent } from './sign-up-forms/sign-up-empresa/sign-up-empresa.component';
import { LlistaOfertesComponent } from './llista-ofertes/llista-ofertes.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeProfeComponent,
    HomeAlumneComponent,
    HomeEmpresaComponent,
    HeaderComponent,
    SearchOfertaComponent,
    SignUpAlumneComponent,
    SignUpProfessorComponent,
    SignUpEmpresaComponent,
    LlistaOfertesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
