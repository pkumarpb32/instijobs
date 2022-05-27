import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Oferta } from '../Classes/Oferta';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-info-oferta',
  templateUrl: './info-oferta.component.html',
  styleUrls: ['./info-oferta.component.css']
})
export class InfoOfertaComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private dades: DataServiceService) { }
  id: any;
  oferta: Oferta = new Oferta();
  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => { 
      this.id = params.get('id'); 
      console.log(this.id);
      this.dades.getOfeta(this.id).subscribe(res=>{
        this.oferta = res;
      })
  });
  }

}
