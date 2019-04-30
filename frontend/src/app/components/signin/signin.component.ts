import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers: [UserService, DialogComponent ]
})
export class SigninComponent implements OnInit {

  hide = true;
  hide2 = true;
  coemail:string;
  copassword:string;

  constructor(private userService: UserService, private dialogRegisteredUser: DialogComponent) { }

  ngOnInit() {
  }

  addUser(form: NgForm){
    console.log(form.value);
    this.userService.createUser(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.dialogRegisteredUser.openDialog();
      });
  }

  resetForm(form?: NgForm){
    if (form){
      form.reset();
      this.userService.selectedUser = new User();
      this.coemail = " ";
      this.copassword = " ";
    }
  }

}