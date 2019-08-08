import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import {FormService} from '../../services/formService/form.service';
import { DialogsComponent, DialogcontactformComponent } from '../dialogs/dialogs.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
  providers: [FormService]
})
export class ContactusComponent implements OnInit {

  respuesta: any;
  formContact: FormGroup;
  
  constructor(private formService: FormService, private dialog: MatDialog, private fb: FormBuilder) { }

  ngOnInit() {
    this.formContact = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.compose([Validators.required, Validators.email])],
      comment: [null,Validators.required]
    });
  }

  dialogContactform(formContact: FormGroup, formDirective: FormGroupDirective){
    let dialogRef = this.dialog.open(DialogcontactformComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          formContact.reset();
          formDirective.resetForm();
          
        }
      }
    )
  }

  sendMessage(formContact: FormGroup, formDirective: FormGroupDirective): void{
    // console.log("datos a enviar:",formContact.value);
    this.formService.sendMail(formContact.value).subscribe(
      res => {
        console.log(res);
        this.respuesta = res;
        if(this.respuesta.status == "ok"){
          this.dialogContactform(formContact, formDirective);
        }
      }
    )

  }

}
