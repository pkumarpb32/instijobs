import { Component, OnInit } from '@angular/core';
import { Oferta } from '../Classes/Oferta';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-llista-ofertes-profe',
  templateUrl: './llista-ofertes-profe.component.html',
  styleUrls: ['./llista-ofertes-profe.component.css']
})
export class LlistaOfertesProfeComponent implements OnInit {

  ofertes:Oferta[] = [];
  OfertesValidades: Oferta[] = [];
  OfertesNoValidades: Oferta[] = [];
  constructor(public dades: DataServiceService) { }

  ngOnInit(): void {
    this.dades.getOfertas().subscribe(res=>{
      this.ofertes = res;
      this.OfertesValidades = this.ofertes.filter(oferta => oferta.validat);
      this.OfertesNoValidades = this.ofertes.filter(oferta => !oferta.validat);
      console.log(this.ofertes);
    });
    // console.log(this.dades.ofertes);

  }

}
