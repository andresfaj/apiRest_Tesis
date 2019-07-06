import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RstateService } from '../../services/rstate/rstate.service';
import { RealState } from '../../models/rstate';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { DialogdeletepostComponent, DialogdeletepostsucessComponent, DialogupdatepostComponent } from '../dialogs/dialogs.component';

@Component({
  selector: 'app-userpublications',
  templateUrl: './userpublications.component.html',
  styleUrls: ['./userpublications.component.css'],
  providers: [UserService]
})
export class UserpublicationsComponent implements OnInit {

  name: string;
  dataUser: any;
  informationUser: any;
  flag: Boolean = false;
  filterMyPost: '';
  rStates: RealState[] = [];
  r: any;

  constructor(private userService: UserService, private rState: RstateService, public dialog: MatDialog) { }

  ngOnInit() {
    this.informationUser = this.userService.getInformation();
    this.rState.getRstatesUser(this.informationUser).subscribe(
      res => {
        this.r = res;
        this.rStates = this.r;
        if(this.rStates.length > 0){
          this.flag = true;
        }
      }
    )
    this.userService.getUser(this.informationUser).subscribe(
      res => {
        this.dataUser = res;
        this.name = this.dataUser.name;
      }
    )
  
  }

  deletePost(formPost: NgForm){
    this.rState.deleteRstate(formPost.value.id).subscribe(
      res => {
        console.log(res);
      }
    )
  }

  dialogDeletePostsucess(){
    let dialogRef = this.dialog.open(DialogdeletepostsucessComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res){
          location.reload();
        }
      }
    )
  }

  editPost(formPost: NgForm, value: boolean){
    formPost.controls['disabled'].setValue(value);
  }

  dialogUpdatepost(formPost: NgForm){
    let dialogRef = this.dialog.open(DialogupdatepostComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.editPost(formPost, res);
        }
      }
    )
  }

  dialogDeletepost(formPost: NgForm){
    let dialogRef = this.dialog.open(DialogdeletepostComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.deletePost(formPost);
          this.dialogDeletePostsucess();          
        }
      }
    )
  }



  savePost(formPost: NgForm){
    var rstateUpdate = new RealState();
    rstateUpdate._id = formPost.value.id;
    rstateUpdate.name = formPost.value.name;
    rstateUpdate.neighborhood = formPost.value.neighborhood;
    rstateUpdate.address = formPost.value.address;
    rstateUpdate.bathrooms = formPost.value.bathrooms;
    rstateUpdate.bedrooms = formPost.value.bedrooms;
    rstateUpdate.description = formPost.value.description;
    rstateUpdate.user = this.informationUser;
    this.rState.updateRstate(rstateUpdate).subscribe(
      res => {
        console.log(res);
        this.dialogUpdatepost(formPost);
      }
    )

  }



}
