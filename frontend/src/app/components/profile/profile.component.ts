import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm, FormControl, FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import {User} from '../../models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [UserService]
})
export class ProfileComponent implements OnInit {

  dataUser: any;
  informationUser: any;
  formProfile: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder) {
    
  }

  ngOnInit() {
    this.formProfile = this.fb.group({
      name: [{value: null, disabled: true}],
      lastName: [{value: null, disabled: true}],
      phone: [{value: null, disabled: true}],
      email: [{value: null, disabled: true}]
    });
    this.informationUser = this.userService.getInformation();
    this.userService.getUser(this.informationUser).subscribe(
      res => {        
        this.dataUser = res;
        this.formProfile.controls['name'].setValue(this.dataUser.name);
        this.formProfile.controls['lastName'].setValue(this.dataUser.lastName);
        this.formProfile.controls['phone'].setValue(this.dataUser.phone);
        this.formProfile.controls['email'].setValue(this.dataUser.email);
      }
    )    
  }

  edit(formProfile: FormGroup){
    this.dataUser.name = formProfile.value.name;
    this.dataUser.lastName = formProfile.value.lastName;
    this.dataUser.phone = formProfile.value.phone;
    this.dataUser.email = formProfile.value.email;
    console.log("DATOS A CAMBIAR:", this.dataUser);
    this.userService.updateUser(this.dataUser).subscribe(res => {
      console.log("Respuesta:",res);
    })
  }

  onSubmit(buttonType):void{
    if(buttonType==="unlock"){
      this.formProfile.controls['name'].enable();
      this.formProfile.controls['lastName'].enable();
      this.formProfile.controls['phone'].enable();
      this.formProfile.controls['email'].enable();
      console.log("DATOS DEL PERFIL:",this.formProfile.value); 

    }else if(buttonType==="edit"){      
      this.edit(this.formProfile);
    }
  }
}
