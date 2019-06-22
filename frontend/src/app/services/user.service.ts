import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Comunicacion entre backend y frontend
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly URL_API = 'http://localhost:8000/api/users';
  readonly URL_API_SESSION = 'http://localhost:8000/session/user/login';
  selectedUser: User;
  users: User[];
  token: string;
  informationUser: string;

  constructor(private http: HttpClient) {//Hacer consultas al servidor
  }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  getUser(_id: string){
    return this.http.get(this.URL_API+`/${_id}`);
  }

  createUser(user: User){ 
    return this.http.post(this.URL_API, user);
  } 

  updateUser(user: User){
    return this.http.put(this.URL_API + `/${user._id}`, {name: user.name, lastName: user.lastName, phone: user.phone, email: user.email, password: user.password });
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  validateLogin(user: User): Observable<any>{
    return this.http.post<JwtResponse>(this.URL_API_SESSION, {email: user.email, password: user.password}).pipe(tap(
      (res: any) => {
        if (res) {
          if(!res.dataUser){
          }else{
            this.saveToken(res.dataUser.accessToken);
            this.saveInformation(res.dataUser.id);
          }
        }
      }
    ))
  }

  logout(): void{
    this.token = '';
    this.informationUser = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("ACCESS_INFO");
  }

  private saveToken(token: string): void{
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token = token;
  }

  private saveInformation(informationUser: string): void{
    console.log("Informacion:", informationUser);
    localStorage.setItem("ACCESS_INFO", informationUser);    
  }

  getToken():String{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  getInformation():String{
    if(!this.informationUser){
      this.informationUser = localStorage.getItem("ACCESS_INFO");
    }
    return this.informationUser;
  }
    
}
