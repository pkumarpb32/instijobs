import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private dades : DataServiceService, private router : Router){}
 canActivate():Observable<boolean>{
  return this.dades.verifyToken().pipe(
    map((data) => {
        if(data.dataUser.email != null){
          return true;
          
        }
        else{
          this.router.navigate(['login']);
          return false;   
        }    
    }));
}
}
