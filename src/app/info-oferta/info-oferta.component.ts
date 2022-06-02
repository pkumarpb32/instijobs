import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Oferta } from '../Classes/Oferta';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-info-oferta',
  templateUrl: './info-oferta.component.html',
  styleUrls: ['./info-oferta.component.css']
})
export class InfoOfertaComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, public dades: DataServiceService, private router: Router, private route: ActivatedRoute) { }
  id: any;
  oferta: Oferta = new Oferta();
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      this.dades.getOfeta(this.id).subscribe(res=>{
        this.oferta = res;
        let t = this.oferta.data_publicacio.split("T");
        this.oferta.data_publicacio = t[0];
      })
  });
  }
  // Funció per validar la oferta
  validar(){
    const body = {
      tipus: 'treball',
      id: this.id
    }
    this.dades.validarOferta(body).subscribe(res=>{
      this.router.navigate([{outlets: {'outlet-profe' :['llista-oferta-profe']}}], {relativeTo: this.route.parent});
    })
  }
  // Funció per eliminar la oferta
  eliminar(){
    this.dades.eliminarOferta(this.id).subscribe(res=>{
      if(this.dades.role === 'profe'){
        this.router.navigate([{outlets: {'outlet-profe' :['llista-oferta-profe']}}], {relativeTo: this.route.parent});
      }
      else if(this.dades.role === 'empresa'){
        this.router.navigate([{outlets: {'outlet-empresa' :['llista-oferta']}}], {relativeTo: this.route.parent});
      }
    });
  }

    // Funció per inscriure a la oferta
    inscriure(){
      this.dades.inscriure(this.id).subscribe(res=>{
        this.router.navigate([{outlets: {'outlet-alumne' :['llista-oferta']}}], {relativeTo: this.route.parent});
      },
      (error)=>
      {
        alert(error.error);
        }
      );
    }

}
