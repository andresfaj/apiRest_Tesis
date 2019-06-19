import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { RealState } from '../../models/rstate';

@Injectable({
  providedIn: 'root'
})
export class RstateService {

  selectedRstate: RealState;
  rstates: RealState[];
  readonly URL_API = 'http://localhost:8000/rstate/homes';

  constructor(private http: HttpClient) {
    this.selectedRstate = new RealState;
  }

  getRstates(){
    return this.http.get(this.URL_API);
  }

}