import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RstateService } from '../../services/rstate/rstate.service';
import { RealState } from '../../models/rstate';
import { MatDialog, MatSort} from '@angular/material';
import { DialogdeletepostComponent, DialogdeletepostsucessComponent, DialogupdatepostComponent } from '../dialogs/dialogs.component';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

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
  rStates: RealState[] = [];
  r: any;
  displayedColumns: string[] = ['typeProperty', 'typeOffer', 'price', 'city', 'area', 'bathrooms', 'actions'];
  dataSource: MatTableDataSource<RealState>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private rState: RstateService, public dialog: MatDialog) { }

  ngOnInit() {
    this.informationUser = this.userService.getInformation();
    this.rState.getRstatesUser(this.informationUser).subscribe(
      res => {
        this.r = res;
        this.rStates = this.r;

        if(this.rStates.length > 0){
          this.flag = true;
          this.dataSource = new MatTableDataSource<RealState>(this.rStates);
          this.dataSource.paginator = this.paginator;
          // this.dataSource.sort = this.sort;
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

  deletePost(id: string){
    this.rState.deleteRstate(id).subscribe(
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

  dialogDeletepost(id: string){
    let dialogRef = this.dialog.open(DialogdeletepostComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.deletePost(id);
          this.dialogDeletePostsucess();          
        }
      }
    )
  }

  applyFilterTable(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
