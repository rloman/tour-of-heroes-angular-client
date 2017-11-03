import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class CanActivateGuard implements CanActivate {

  constructor(
    private router: Router, 
    private authenticationService: AuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(this.authenticationService.isLoggedIn()) {
        return true;
      }
      else {
        this.router.navigate(['/login']);
        return false;
      }
  }
}
