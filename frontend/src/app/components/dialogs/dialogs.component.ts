import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() { 
    const dialogRef = this.dialog.open(DialogloginComponent);
  }

  openDialogEmpty() {
    const dialogRef = this.dialog.open(DialogemptyloginComponent);
  }

  openDialogSignup() {
    const dialogRef = this.dialog.open(DialogsignupComponent);
  }

  openDialogProfile() {
    const dialogRef = this.dialog.open(DialogprofileComponent);
  }

  openDialogPost() {
    const dialogRef = this.dialog.open(DialogpostComponent);
  }

}

@Component({
  selector: 'app-dialoglogin',
  templateUrl: './dialoglogin.html'
})
export class DialogloginComponent {}

@Component({
  selector: 'app-dialogemptylogin',
  templateUrl: './dialogemptylogin.html'
})
export class DialogemptyloginComponent {}

@Component({
  selector: 'app-dialogsignup',
  templateUrl: './dialogsignup.html'
})
export class DialogsignupComponent {}

@Component({
  selector: 'app-dialogprofile',
  templateUrl: './dialogprofile.html'
})
export class DialogprofileComponent {}

@Component({
  selector: 'app-dialogpost',
  templateUrl: './dialogpost.html'
})
export class DialogpostComponent {}
