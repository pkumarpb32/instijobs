import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map, Subject } from 'rxjs';
import { Curs } from './Classes/Curs';
import { JwtResponseI } from './Classes/JwtResponseI';
import { Oferta } from './Classes/Oferta';
import { Poble } from './Classes/Poble';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  authSubject = new BehaviorSubject(false);
  private token = " ";
  public email = " ";
  public role = " ";
  constructor(private _http: HttpClient) { }
  cursos: Curs [] = [];
  pobles: Poble[] = [];
  ofertes: Oferta[] = [];
  private url: string = "http://localhost:3000/api";
  jornades: string[] = ['Completa','Indiferent', 'Intensiva', 'Parcial'];
  tipus_contracte : string[] = ['Indefinit', 'Temporal'];

  // Mètode per fer login
  post(url:string, body:any):Observable<JwtResponseI> {{
    return this._http.post<JwtResponseI>(url, body);
    }
  }

    // Mètode per crear un compte nou
  signUp(url:string, body:any):Observable<any> {{
    return this._http.post<any>(url, body);
    }
  }

    // Mètode per verificar el token
  verifyToken():Observable<any> {{
    return this._http.get(this.url + "/user");
    }
  }
    // Mètode per activar un compte
  activateAccount(body : any):Observable<JwtResponseI>{
    return this._http.put<JwtResponseI>(this.url + "/registre/confirmacio", body);
  }

    // Retorna tots els cursos
  getCuros(): void{
    this._http.get<Curs[]>(this.url + "/cursos").subscribe((res: Curs[])=>{
      this.cursos = res;
    });
  }
  
    // Retorna tots els pobles
  getPobles(): void{
    this._http.get<Poble[]>(this.url +  "/pobles").subscribe((res: Poble[])=>{
      this.pobles = res;
    });
  }

  // Retorna totes les ofertes
  getOfertas(): void{
    this._http.get<Oferta[]>(this.url +  "/ofertes").subscribe((res: Oferta[])=>{
      this.ofertes = res;
    });
  }

    // Mètode per tancar la sessió
  logout(): void {
    this.token = " ";
    localStorage.removeItem("ACCESS_TOKEN");
  }

    // Mètode per guardar el token
  saveToken(token: string): void {
    localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token));
    this.token = token;
  }

    // Aquest mètode retorna el token
  getToken(): string {
    if (this.token = " ") {
      this.token = JSON.parse(localStorage.getItem('ACCESS_TOKEN') || '{}');
      return this.token;
    }
    console.log(this.token);

    return this.token;
  }

// Mètode per enviar el correu de confirmació
 sendConfirmationMail(body : any){
  return this._http.post<any>(this.url + "/login/canviarpass", body);
 }

 // Mètode per canviar la contrasenya
 changePassword(body : any):Observable<JwtResponseI>{
  return this._http.put<JwtResponseI>(this.url + "/login/canviarpass/password", body);
 }

 // Mètode per inserir una oferta de FCT
  addFCT(body: any){
    return this._http.post<any>(this.url + "/fct", body);
 }
 // Mètode per inserir una oferta de treball
 addFeina(body: any){
  return this._http.post<any>(this.url + "/feina", body);
}

  getOfeta(id: number):Observable<Oferta>{
    return this._http.get<Oferta>(this.url + "/ofertes/" + id);
  }
}