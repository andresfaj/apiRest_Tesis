import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user';

declare var M: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  addUser(form: NgForm){
    this.userService.createUser(form.value)
    .subscribe(res => {
      this.resetForm(form);
      M.toast({html: 'Saved successfuly'})
    });
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.userService.selectedUser = new User();
    }
  }

}
