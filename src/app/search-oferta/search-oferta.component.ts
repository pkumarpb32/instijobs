import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curs } from '../Classes/Curs';

@Component({
  selector: 'app-search-oferta',
  templateUrl: './search-oferta.component.html',
  styleUrls: ['./search-oferta.component.css']
})
export class SearchOfertaComponent implements OnInit {

  constructor(private _http:HttpClient) { }
  cursos: Curs[] = [];
  ngOnInit(): void {
    this.getCuros();
  }


  getCuros(): void{
    this._http.get<any>("http://localhost:3000/api/cursos").subscribe(res=>{
      this.cursos = res;
      console.log(res);
    })
  }
}
