import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthServiceService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const URL: string = state.url;
    return this.checkLogin(URL);
  }
  checkLogin(url: string): boolean{
    if (this.authService.isLog){
      if (url.split('/')[1] === 'tab2' && this.authService.status){
        this.router.navigate(['/error404']);
        return false;
      }else if (url.split('/')[1] === 'tab1' && !this.authService.status){
        this.router.navigate(['/error404']);
        return false;
      }
      return true;
    }
    else{
      this.authService.redirectUrl = url;
      this.router.navigate(['/login']);
      return false;
    }
  }
}
