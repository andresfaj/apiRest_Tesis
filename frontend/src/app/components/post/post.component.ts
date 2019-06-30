import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RstateService } from '../../services/rstate/rstate.service';
import { DialogsComponent } from '../dialogs/dialogs.component'; 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [UserService, RstateService, DialogsComponent]
})
export class PostComponent implements OnInit {

  formPost: FormGroup;
  dataPost: any;
  informationUser: any;

  constructor(private fb: FormBuilder, private userService: UserService, private rState: RstateService, private dialog: DialogsComponent) { }

  ngOnInit() {
    this.informationUser = this.userService.getInformation();
    this.formPost = this.fb.group({
      name: [null, Validators.required],
      neighborhood: [null, Validators.required],
      address: [null, Validators.required],
      bathrooms: [null, Validators.required],
      bedrooms: [null, Validators.required],
      description: [null, Validators.required]
    });
  }

  addPost(formPost: FormGroup):void{
    this.dataPost = {
      name: this.formPost.value.name,
      neighborhood: this.formPost.value.neighborhood,
      address: this.formPost.value.address,
      bathrooms: this.formPost.value.bathrooms,
      bedrooms: this.formPost.value.bedrooms,
      description: this.formPost.value.description,
      user: this.informationUser
    }

    this.rState.createRstate(this.dataPost).subscribe(
      res => {
        this.dialog.openDialogPost();
        this.formPost.reset();
      }
    )

  }

}
