import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';
import { Observable, map} from 'rxjs';
import { DataServiceService } from '../data-service.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private dades: DataServiceService, public router: Router){}
  canActivate(route: ActivatedRouteSnapshot):Observable<boolean> | boolean{
    const role: string = route.data['expectedRole'];
    return this.dades.verifyToken().pipe(
      map((data) => {
          if(data.dataUser.tipus_usuari === role){
            return true;
            
          }
          this.router.navigate(['login']);
          return false;       
      }));
}

}
