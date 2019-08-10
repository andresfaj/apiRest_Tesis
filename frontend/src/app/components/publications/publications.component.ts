 import { Component, OnInit, ViewChild } from '@angular/core';
import { RstateService } from '../../services/rstate/rstate.service';
import { UserService } from '../../services/user.service';
import {RealState} from '../../models/rstate';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  providers: [ UserService ]
})
export class PublicationsComponent implements OnInit {

  rStates: RealState[] = [];
  r: any;
  isAuthenticated: Boolean;
  token: String;
  filterPost = '';
  displayedColumns: string[] = ['typeProperty', 'typeOffer', 'price', 'city', 'area', 'bathrooms', 'actions'];
  dataSource: MatTableDataSource<RealState>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private rState: RstateService, private userService: UserService) { }

  ngOnInit() {
    this.token = this.userService.getToken();
    if(this.token != null){
      this.isAuthenticated = false;
    }else{
      this.isAuthenticated = true;
    }
    this.rState.getRstates().subscribe(
      response => {
        this.r = response;
        this.rStates = this.r;
        this.dataSource = new MatTableDataSource<RealState>(this.rStates);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;        
      }
    );    
  }

  applyFilterTable(filterValue: string){

    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

}
