import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAutheticated(): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');
    if(!token){
      // console.log("Token does not exists");
      return false;
    }else{
      // console.log("Token exists");
      return true;
    }
  }

}
