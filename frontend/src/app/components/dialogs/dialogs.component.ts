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
}

@Component({
  selector: 'app-dialoglogin',
  templateUrl: './dialoglogin.html'
})
export class DialogloginComponent {}

