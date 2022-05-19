import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // initially set to false
  isEnabled: boolean = false;
  constructor(private router:Router, public dades: DataServiceService) { }

  ngOnInit(): void {
  }

}
