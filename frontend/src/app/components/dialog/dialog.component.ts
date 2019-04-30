import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public dialog: MatDialog) { }

  openDialog(){
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log("Dialog result:", result);
    });
  }

}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './registeredUser.component.html',
})
export class DialogContentExampleDialog {}