import { Component, OnInit } from '@angular/core';
import { RstateService } from '../../services/rstate/rstate.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  // rstates: any[] = [{name: "Casa Finca", neighborhood: "Ciudad jardín", description: "Casa de 3 pisos con 20 baños." }, {name: "Apartamento Lili", neighborhood: "Valle del lili", description: "Casa de 3 pisos con 20 baños." }, {name: "Apartamento farallones", neighborhood: "Pance", description: "Casa de 3 pisos con 20 baños."}]
  rStates: any = [];

  constructor(private rState: RstateService) { }

  ngOnInit() {
    this.rState.getRstates().subscribe(
      response => {
        this.rStates = response;
        console.log(this.rStates);
      }
    );
  }
}
