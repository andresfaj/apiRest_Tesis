import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { DialogsComponent } from '../dialogs/dialogs.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserService, DialogsComponent]
})
export class SignupComponent implements OnInit {

  hide = true;
  hide2 = true;
  formSignup: FormGroup;
  dataUser: any;

  constructor(private userService: UserService, private fb: FormBuilder,  private dialog: DialogsComponent, private router: Router) { }

  ngOnInit() {
    this.formSignup = this.fb.group({
        name: [null, Validators.required],
        lastName: [null, Validators.required],
        phone: [null, Validators.compose([Validators.required, Validators.pattern('[0-9]*')])],
        email: [null, Validators.compose([Validators.required, Validators.email])],
        coemail: [null, Validators.compose([Validators.required, Validators.email])],
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
        this.dialog.openDialogSignup();
        this.router.navigate(['/login']);    
      });
  }

}