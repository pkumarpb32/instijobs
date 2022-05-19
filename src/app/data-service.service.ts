import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { Curs } from './Classes/Curs';
import { JwtResponseI } from './Classes/JwtResponseI';
import { Poble } from './Classes/Poble';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  authSubject = new BehaviorSubject(false);
  private token = " ";
  public email = " ";

  constructor(private _http: HttpClient) { }
  cursos: Curs [] = [];
  pobles: Poble[] = [];
  url: string = "http://localhost:3000/api";
  

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

  verifyToken():Observable<any> {{
    return this._http.get(this.url + "/user");
    }
  }

  activateAccount(body : any):Observable<JwtResponseI>{
    return this._http.put<JwtResponseI>(this.url + "/registre/confirmacio", body);
  }

  getCuros(): void{
    this._http.get<Curs[]>(this.url + "/cursos").subscribe((res: Curs[])=>{
      this.cursos = res;
    });
  }

  getPobles(): void{
    this._http.get<Poble[]>(this.url +  "/pobles").subscribe((res: Poble[])=>{
      this.pobles = res;
    });
  }

  logout(): void {
    this.token = " ";
    localStorage.removeItem("ACCESS_TOKEN");
   // localStorage.removeItem("EXPIRES_IN");
  }

  saveToken(token: string): void {
    localStorage.setItem("ACCESS_TOKEN", JSON.stringify(token));
    this.token = token;
  }

  getToken(): string {
    if (this.token = " ") {
      this.token = JSON.parse(localStorage.getItem('ACCESS_TOKEN') || '{}');
      return this.token;
    }
    console.log(this.token);

    return this.token;
  }
// Mètode per canviar la contrasenya
 changePassword(body : any){
  return this._http.put<any>(this.url + "/login/canviarpass", body);
 }

}