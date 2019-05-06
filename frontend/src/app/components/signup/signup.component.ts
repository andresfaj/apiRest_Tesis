import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService, DialogComponent ]
})
export class SignupComponent implements OnInit {

  hide = true;
  hide2 = true;
  coemail:string;
  copassword:string;
  email = new FormControl('', [Validators.required, Validators.email]);

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

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debe ingresar un valor' :
        this.email.hasError('email') ? 'No es un correo valido' :
            '';
  }

}