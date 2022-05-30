import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeProfeComponent } from './home-profe/home-profe.component';
import { HomeAlumneComponent } from './home-alumne/home-alumne.component';
import { HomeEmpresaComponent } from './home-empresa/home-empresa.component';
import { HeaderComponent } from './header/header.component';
import { SearchOfertaComponent } from './search-oferta/search-oferta.component';
import { SignUpAlumneComponent } from './sign-up-forms/sign-up-alumne/sign-up-alumne.component';
import { SignUpEmpresaComponent } from './sign-up-forms/sign-up-empresa/sign-up-empresa.component';
import { LlistaOfertesComponent } from './llista-ofertes/llista-ofertes.component';
import { FooterComponent } from './footer/footer.component';
import { AuthInterceptor } from './_helpers/auth.interceptor';
import { ConfirmEmailComponent } from './sign-up-forms/confirm-email/confirm-email.component';
import { CanviarContrasenyaComponent } from './canviar-contrasenya/canviar-contrasenya.component';
import { CrearOfertaComponent } from './components-empresa/crear-oferta/crear-oferta.component';
import { InfoOfertaComponent } from './info-oferta/info-oferta.component';
import { LlistaOfertesProfeComponent } from './llista-ofertes-profe/llista-ofertes-profe.component';
import { LlistaAlumnesComponent } from './components-empresa/llista-alumnes/llista-alumnes.component';

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
    SignUpEmpresaComponent,
    LlistaOfertesComponent,
    FooterComponent,
    ConfirmEmailComponent,
    CanviarContrasenyaComponent,
    CrearOfertaComponent,
    InfoOfertaComponent,
    LlistaOfertesProfeComponent,
    LlistaAlumnesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
