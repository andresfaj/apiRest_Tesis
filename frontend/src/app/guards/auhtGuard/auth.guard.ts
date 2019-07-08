import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../services/authService/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  base_url: string;

  constructor(private router: Router, private authService: AuthService){}

  canActivate(): boolean{

    if (this.authService.isAutheticated()){
      return true;
    }

    this.router.navigate(['/login']);
    return false;

  }
  
}
