import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth-service.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  authService:AuthService= inject(AuthService);
  route: Router= inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean 
   {
    if(this.authService.isLoggedIn())
      {
        return true;
      }
      else
      {
        this.route.navigate(['login']);
        return false;

      }
  }
}
