import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Curs } from './Classes/Curs';
import { JwtResponseI } from './Classes/JwtResponseI';
import { Poble } from './Classes/Poble';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  authSubject = new BehaviorSubject(false);
  private token: string = "";

  constructor(private _http: HttpClient) { }
  cursos: Curs [] = [];
  pobles: Poble[] = [];
  url: string = "http://localhost:3000/api";
  

  post(url:string, body:any):Observable<JwtResponseI> {{
    return this._http.post<JwtResponseI>(url, body);
    }
  }

  getCuros(): void{
    this._http.get<Curs[]>(this.url + "/cursos").subscribe((res: Curs[])=>{
      this.cursos = res;
      console.log(res);
    })
  }

  getPobles(): void{
    this._http.get<Poble[]>(this.url +  "/pobles").subscribe((res: Poble[])=>{
      this.pobles = res;
    });
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  getToken(): string {
    if (!this.token) {
      this.token = JSON.parse(localStorage.getItem('ACCESS_TOKEN') || '{}');
    }
    return this.token;
  }

  
}
