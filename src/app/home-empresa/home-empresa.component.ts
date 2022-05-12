import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home-empresa',
  templateUrl: './home-empresa.component.html',
  styleUrls: ['./home-empresa.component.css']
})
export class HomeEmpresaComponent implements OnInit {

  constructor(private dades : DataServiceService, private router: Router) { }

  ngOnInit(): void {
    // if(Object.keys(this.dades.getToken()).length != 0){       
    //   this.dades.verifyToken().subscribe(res =>{
    //      this.router.navigate([res.dataUser.tipus_usuari]);
    //      if(res.dataUser.tipus_usuari != "empresa"){
    //       this.router.navigate(['login']);
    //      }
    //     }, 
    //     (error)=>{
    //       this.router.navigate(['login']);
    //     }
    //   );
    // }
    // else{
    //   this.router.navigate(['login']);
    // }
  }
  logOut(){
    this.dades.logout();
    this.router.navigate(['login']);
  }
}
