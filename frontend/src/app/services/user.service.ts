import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';//Comunicacion entre backend y frontend
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];
  readonly URL_API = 'http://localhost:8000/api/users';
  token: string;
  informationUser;

  messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();


  constructor(private http: HttpClient) {//Hacer consultas al servidor

  }

  getUsers(){
    return this.http.get(this.URL_API);
  }

  createUser(user: User){ 
    return this.http.post(this.URL_API, user);
  } 

  updateUser(user: User){
    return this.http.put(this.URL_API + `/${user._id}`, user);
  }

  deleteUser(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

  // changeMessage(message: string) {
  //   this.messageSource.next(message)
  // }

  validateLogin(user: User): Observable<any>{
    return this.http.post<JwtResponse>(this.URL_API, {email: user.email, password: user.password}).pipe(tap(
      (res: any) => {
        if (res) {
          if(!res.dataUser){
          }else{
            this.saveToken(res.dataUser.accessToken);
            this.saveInformation(res.dataUser.name);
          }
        }
      }
    ))
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
  }

  private saveToken(token: string): void{
    localStorage.setItem("ACCESS_TOKEN", token);
    this.token = token;
  }

  private saveInformation(informationUser): void{
    console.log("INformacion:", informationUser);
    localStorage.setItem("ACCESS_INFO", informationUser);    
  }

  getToken():String{
    if(!this.token){
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  getInformation():any{
    if(!this.informationUser){
      this.informationUser = localStorage.getItem("ACCESS_INFO");
    }
    return this.informationUser;
  }
    
}
