import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  informationUser: any;
  name: string;
  lastName: string;
  phone: number;
  email: string;

  constructor(public userService: UserService) { }

  ngOnInit() {
    this.informationUser = this.userService.getInformation();
    console.log("INFORMATION",this.informationUser);
    this.name = this.informationUser;
    console.log("NAME:", this.name);
  }
}
