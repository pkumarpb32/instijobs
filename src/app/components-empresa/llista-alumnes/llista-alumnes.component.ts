import { Component, OnInit } from '@angular/core';
import { Alumne } from 'src/app/Classes/Alumne';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
  selector: 'app-llista-alumnes',
  templateUrl: './llista-alumnes.component.html',
  styleUrls: ['./llista-alumnes.component.css']
})
export class LlistaAlumnesComponent implements OnInit {

  llista_allumnes: Alumne[] = [];
  constructor(private dades: DataServiceService) { }

  ngOnInit(): void {
    this.dades.getLlistaAlumnes().subscribe(res =>{
      console.log(res);
      this.llista_allumnes = res;
      console.log(this.llista_allumnes);
    })
  }

}
