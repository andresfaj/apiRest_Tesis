import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { NgForm } from '@angular/forms';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import { DialogsComponent } from '../dialogs/dialogs.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, DialogsComponent] 
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  errorM: string;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor(private userService: UserService, private router: Router, private dialog: DialogsComponent) { }

  ngOnInit() {
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'please insert a value' :
        this.email.hasError('email') ? 'It is not a valid mail' :
            '';
  }

  login(loginForm: NgForm): void{
    console.log("Datos introducidos:",loginForm.value)
    this.userService.validateLogin(loginForm.value).subscribe(res => {
      if(res.dataUser){
        location.reload();
        this.router.navigate(['/post']);    

      }else{
        this.errorM = res.errorMessage;
        this.dialog.openDialog();
        console.log("RESPUESTA", this.errorM);
      }
      
    })
  }

}
