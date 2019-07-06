import { Component, OnInit } from '@angular/core';
import {UserService} from '../app/services/user.service';

//Decorador, soporta una serie de metadatos
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Virtual Homes';
  token: any;
  account = "Account";
  accountTwo: String;
  userInformation: any;
  dataUser: any;

  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.token = this.userService.getToken();
    this.userInformation = this.userService.getInformation();
    if(this.token != null){
      this.userService.getUser(this.userInformation).subscribe(
        res => {
          this.dataUser = res;
          this.accountTwo = this.dataUser.name + " " + this.dataUser.lastName;
        }
      )
    }    
  }

  logout() {
    this.token = this.userService.logout();    
  }
  
}  
