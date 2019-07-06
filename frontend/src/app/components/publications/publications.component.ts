 import { Component, OnInit } from '@angular/core';
import { RstateService } from '../../services/rstate/rstate.service';
import { UserService } from '../../services/user.service';
import {RealState} from '../../models/rstate';

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
      }
    );
  }
}
