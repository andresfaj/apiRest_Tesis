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
  
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.token = this.userService.getToken();
  }

  logout() {
    this.token = this.userService.logout();    
  }
  
}  
