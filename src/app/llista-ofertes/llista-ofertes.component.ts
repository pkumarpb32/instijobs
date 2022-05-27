import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-llista-ofertes',
  templateUrl: './llista-ofertes.component.html',
  styleUrls: ['./llista-ofertes.component.css']
})
export class LlistaOfertesComponent implements OnInit {

  FiltersForm!: FormGroup;
  fOferta:string = "";
  fJornada: string = "";
  constructor(public dades: DataServiceService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dades.getOfertas();
    // formulari per filtrar les ofertes
    this.FiltersForm = this.formBuilder.group({
      filterOferta:[''],
      filterContracte:['']
    })
  }

  // Funció per treure els filtres de les ofertes
  onSubmit(){
    console.log(this.FiltersForm.value);
    this.FiltersForm.reset();
  }
 filterTipusOferta(e:any){
  console.log(e.target.value);
  if(this.fJornada === "" && this.fOferta === ""){
  this.fOferta = e.target.value;
 // this.dades.ofertes = this.dades.ofertes.filter(oferta => oferta. === e.target.value);
  }
 }
 filterJornada(e:any){
  console.log(e.target.value);
  this.dades.ofertes = this.dades.ofertes.filter(oferta => oferta.tipus_contracte === e.target.value);
 }

}
