import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dades: DataServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  logOut(){
    this.dades.logout();
    this.router.navigate(['login']);
  }

}
