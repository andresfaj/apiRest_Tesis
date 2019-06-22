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

