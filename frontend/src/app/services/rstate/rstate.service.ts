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
  readonly URL_API_USER = 'http://localhost:8000/rstate';

  constructor(private http: HttpClient) {
    this.selectedRstate = new RealState;
  }

  getRstates(){
    return this.http.get(this.URL_API);
  }

  getRstate(_id: string){
    return this.http.get(this.URL_API+ `/${_id}`);
  }

  createRstate(rstate: RealState){
    return this.http.post(this.URL_API, rstate);
  }

  getRstatesUser(user: string){
    return this.http.get(this.URL_API_USER+`/${user}`);
  }

  updateRstate(rstate: RealState){
    return this.http.put(this.URL_API + `/${rstate._id}`, rstate);
  }

  deleteRstate(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);

  }
}
