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

@Component({
  selector: 'app-dialogdeletepost',
  templateUrl: './dialogdeletepost.html'
})
export class DialogdeletepostComponent {}

@Component({
  selector: 'app-dialogdeletepostsucess',
  templateUrl: './dialogdeletepostsucess.html'
})
export class DialogdeletepostsucessComponent {}

@Component({
  selector: 'app-dialogupdatepost',
  templateUrl: './dialogupdatepost.html'
})
export class DialogupdatepostComponent {}

@Component({
  selector: 'app-dialogexistinguser',
  templateUrl: './dialogexistinguser.html'
})
export class DialogexistinguserComponent {}

@Component({
  selector: 'app-dialogcontactform',
  templateUrl: './dialogcontactform.html'
})
export class DialogcontactformComponent {}
