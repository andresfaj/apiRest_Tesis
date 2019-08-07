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
  dataTabla: MatTableDataSource<RealState>;
  filterPost = '';

  @ViewChild(MatPaginator) paginador: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private rState: RstateService, public dialog: MatDialog) { }

  ngOnInit() {
    this.informationUser = this.userService.getInformation();
    this.rState.getRstatesUser(this.informationUser).subscribe(
      res => {
        this.r = res;
        this.rStates = this.r;        
        if(this.rStates.length > 0){
          this.flag = true;
          this.dataTabla = new MatTableDataSource<RealState>(this.rStates);
          setTimeout(() => this.dataTabla.paginator = this.paginador);
          setTimeout(() => this.dataTabla.sort = this.sort);
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
    this.dataTabla.filter = filterValue.trim().toLowerCase();
    if (this.dataTabla.paginator) {
      this.dataTabla.paginator.firstPage();
    }
  }

}
