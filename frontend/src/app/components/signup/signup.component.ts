import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material';
import { DialogexistinguserComponent, DialogsignupComponent } from '../dialogs/dialogs.component';

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
  controlUser: any;

  constructor(private userService: UserService, private fb: FormBuilder,  private dialog: MatDialog, private router: Router) { }

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

  dialogExistinguser(){
    let dialogRef = this.dialog.open(DialogexistinguserComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.formSignup.controls['email'].reset();
          this.formSignup.controls['coemail'].reset();
        }
      }
    )
  }

  dialogSignup(){
    let dialogRef = this.dialog.open(DialogsignupComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.router.navigate(['/login']);
        }
      }
    )
  }

  addUser(form: FormGroup){
    this.dataUser = {
      name: form.value.name,
      lastName: form.value.lastName,
      phone: form.value.phone,
      email: form.value.email,
      password: form.value.password
    }
    this.userService.createUser(this.dataUser)
      .subscribe(res => {
        this.controlUser = res;
        if(this.controlUser.status == "userused"){
          this.dialogExistinguser();
        }else{
           this.dialogSignup();
        }
      });
  }

}