import { Component, OnInit } from '@angular/core';
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
  value: string;
  errorM: string;

  constructor(private userService: UserService, private router: Router, private dialog: DialogsComponent) { }

  ngOnInit() {
    this.value ="";
  }

  login(loginForm: NgForm): void{
    console.log("Datos introducidos:",loginForm.value)
    if(loginForm.value.email == "" || loginForm.value.password == ""){
      console.log("")
      this.dialog.openDialogEmpty();      
    }else{
      this.userService.validateLogin(loginForm.value).subscribe(res => {
        if(res.dataUser){
          location.reload();
          this.router.navigate(['/post']);    
  
        }else{
          this.errorM = res.errorMessage;
          this.dialog.openDialog();
        }        
      })
    }
  }

}
