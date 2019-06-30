import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RstateService } from '../../services/rstate/rstate.service'; 

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

  rStates: any = [];

  constructor(private userService: UserService, private rState: RstateService) { }

  ngOnInit() {
    this.informationUser = this.userService.getInformation();
    this.rState.getRstatesUser(this.informationUser).subscribe(
      res => {
        this.rStates = res;
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
}
