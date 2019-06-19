import { Component, OnInit } from '@angular/core';
import { RstateService } from '../../services/rstate/rstate.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css'],
  providers: [ ]
})
export class PublicationsComponent implements OnInit {

  rStates: any = [];

  constructor(private rState: RstateService) { }

  ngOnInit() {
    this.rState.getRstates().subscribe(
      response => {
        this.rStates = response;
        // console.log(this.rStates);
      }
    );
  }
}
