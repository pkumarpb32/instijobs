import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curs } from '../Classes/Curs';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-search-oferta',
  templateUrl: './search-oferta.component.html',
  styleUrls: ['./search-oferta.component.css']
})
export class SearchOfertaComponent implements OnInit {

  constructor(private _http:HttpClient, public dades : DataServiceService) { }
  
  ngOnInit(): void {
    this.dades.getCuros();
  }

}
