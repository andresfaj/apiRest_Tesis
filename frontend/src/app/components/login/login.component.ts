import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import { DialogsComponent } from '../dialogs/dialogs.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService, DialogsComponent] 
})
export class LoginComponent implements OnInit {
  hide: boolean = true;
  errorM: string;
  formLogin: FormGroup;

  constructor(private userService: UserService, private router: Router, private dialog: DialogsComponent, private fb: FormBuilder) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: [null, Validators.compose([Validators.required,Validators.email])],
      password: [null, Validators.required]
    });
  }

  login(formLogin: FormGroup): void{
    console.log("Datos introducidos:",formLogin.value);
    if(formLogin.value.email == "" || formLogin.value.password == ""){
      console.log("")
      this.dialog.openDialogEmpty();      
    }else{
      this.userService.validateLogin(formLogin.value).subscribe(res => {
        if(res.dataUser){
          location.reload();
          this.router.navigate(['/allposts']);    
  
        }else{
          this.errorM = res.errorMessage;
          this.dialog.openDialog();
        }        
      })
    }
  }

}
