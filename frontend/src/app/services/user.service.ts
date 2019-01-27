import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';//Comunicacion entre backend y frontend
import { User } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  selectedUser: User;
  users: User[];
  readonly URL_API = 'http://localhost:5000/api/users';

  constructor(private http: HttpClient) {//Hacer consultas al servidor
    this.selectedUser = new User();
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
}
