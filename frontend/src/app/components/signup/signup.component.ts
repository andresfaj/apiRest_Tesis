import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService]
})
export class SignupComponent implements OnInit {

  hide = true;
  hide2 = true;
  formSignup: FormGroup;
  dataUser: any;

  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.formSignup = this.fb.group({
        name: [null, Validators.required],
        lastName: [null, Validators.required],
        phone: [null, Validators.required],
        email: [null, Validators.email],
        coemail: [null, Validators.email],
        password: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        copassword: [null, Validators.compose([Validators.required, Validators.minLength(6)])]
        // terminos: [null, Validators.compose([Validators.required, Validators.requiredTrue])]
    });
  }

  addUser(form: FormGroup){
    this.dataUser = {
      name: form.value.name,
      lastName: form.value.lastName,
      phone: form.value.phone,
      email: form.value.email,
      password: form.value.password
    }
    console.log("Valores:",this.dataUser);
    this.userService.createUser(this.dataUser)
      .subscribe(res => {
        console.log("res de creacion de usuario:", res);
      });
  }

}