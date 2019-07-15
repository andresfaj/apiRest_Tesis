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

  createRstate(fd: FormData, dataUser: RealState){
    fd.append('typeProperty', dataUser.typeProperty);
    fd.append('typeOffer', dataUser.typeOffer);
    fd.append('price', dataUser.price.toString());
    fd.append('negotiable', dataUser.negotiable.toString());
    fd.append('incluAdmin', dataUser.incluAdmin.toString());
    if(dataUser.adminValue == null){
      fd.append('adminValue', null);
    }else{
      fd.append('adminValue', dataUser.adminValue.toString());
    }
    fd.append('department', dataUser.department);
    fd.append('city', dataUser.city);
    fd.append('neighborhood', dataUser.neighborhood);
    fd.append('address', dataUser.address);
    fd.append('area', dataUser.area.toString());
    fd.append('antiquity', dataUser.antiquity.toString());
    fd.append('rooms', dataUser.rooms.toString());
    fd.append('bathrooms', dataUser.bathrooms.toString());
    if(dataUser.apartmentFloor == null){
      fd.append('apartmentFloor', null);
    }else{
      fd.append('apartmentFloor', dataUser.apartmentFloor.toString());
    }
    fd.append('parking', dataUser.parking.toString());
    fd.append('description', dataUser.description);
    fd.append('aircondi', dataUser.interior.aircondi.toString());
    fd.append('jacuzzi', dataUser.interior.jacuzzi.toString());
    fd.append('fwood', dataUser.interior.fwood.toString());
    fd.append('cfloor', dataUser.interior.cfloor.toString());
    fd.append('ikitchen', dataUser.interior.ikitchen.toString());
    fd.append('akitchen', dataUser.interior.akitchen.toString());
    fd.append('pool', dataUser.exterior.pool.toString());
    fd.append('ccondominium', dataUser.exterior.ccondominium.toString());
    fd.append('pvisitors', dataUser.exterior.pvisitors.toString());
    fd.append('cliving', dataUser.careas.cliving.toString());
    fd.append('fcourt', dataUser.careas.fcourt.toString());
    fd.append('bcourt', dataUser.careas.bcourt.toString());
    fd.append('tcourt', dataUser.careas.tcourt.toString());
    fd.append('greenery', dataUser.careas.greenery.toString());
    fd.append('chareas', dataUser.careas.chareas.toString());
    fd.append('schoolnear', dataUser.sector.schoolnear.toString());
    fd.append('unear', dataUser.sector.unear.toString());
    fd.append('smarkets', dataUser.sector.smarkets.toString());
    fd.append('parks', dataUser.sector.parks.toString());
    fd.append('malls', dataUser.sector.malls.toString());
    fd.append('ptransport', dataUser.sector.ptransport.toString());
    fd.append('czone', dataUser.sector.czone.toString());
    fd.append('user', dataUser.user);
    fd.append('disabled', dataUser.disabled.toString());
    return this.http.post(this.URL_API, fd);
  }

  getRstatesUser(user: string){
    return this.http.get(this.URL_API_USER+`/${user}`);
  }

  updateRstate(dataUser: RealState){
    // fd.append('originalname', dataUser.originalname);
    // fd.append('filename', dataUser.filename);
    // fd.append('path', dataUser.path);
    // fd.append('mimetype', dataUser.mimetype);
    // fd.append('size', dataUser.size);
    // fd.append('typeProperty', dataUser.typeProperty);
    // fd.append('typeOffer', dataUser.typeOffer);
    // fd.append('price', dataUser.price.toString());
    // fd.append('negotiable', dataUser.negotiable.toString());
    // fd.append('incluAdmin', dataUser.incluAdmin.toString());
    // if(dataUser.adminValue == null){
    //   fd.append('adminValue', null);
    // }else{
    //   fd.append('adminValue', dataUser.adminValue.toString());
    // }
    // fd.append('department', dataUser.department);
    // fd.append('city', dataUser.city);
    // fd.append('neighborhood', dataUser.neighborhood);
    // fd.append('address', dataUser.address);
    // fd.append('area', dataUser.area.toString());
    // fd.append('antiquity', dataUser.antiquity.toString());
    // fd.append('rooms', dataUser.rooms.toString());
    // fd.append('bathrooms', dataUser.bathrooms.toString());
    // if(dataUser.apartmentFloor == null){
    //   fd.append('apartmentFloor', null);
    // }else{
    //   fd.append('apartmentFloor', dataUser.apartmentFloor.toString());
    // }
    // fd.append('parking', dataUser.parking.toString());
    // fd.append('description', dataUser.description);
    // fd.append('aircondi', dataUser.interior.aircondi.toString());
    // fd.append('jacuzzi', dataUser.interior.jacuzzi.toString());
    // fd.append('fwood', dataUser.interior.fwood.toString());
    // fd.append('cfloor', dataUser.interior.cfloor.toString());
    // fd.append('ikitchen', dataUser.interior.ikitchen.toString());
    // fd.append('akitchen', dataUser.interior.akitchen.toString());
    // fd.append('pool', dataUser.exterior.pool.toString());
    // fd.append('ccondominium', dataUser.exterior.ccondominium.toString());
    // fd.append('pvisitors', dataUser.exterior.pvisitors.toString());
    // fd.append('cliving', dataUser.careas.cliving.toString());
    // fd.append('fcourt', dataUser.careas.fcourt.toString());
    // fd.append('bcourt', dataUser.careas.bcourt.toString());
    // fd.append('tcourt', dataUser.careas.tcourt.toString());
    // fd.append('greenery', dataUser.careas.greenery.toString());
    // fd.append('chareas', dataUser.careas.chareas.toString());
    // fd.append('schoolnear', dataUser.sector.schoolnear.toString());
    // fd.append('unear', dataUser.sector.unear.toString());
    // fd.append('smarkets', dataUser.sector.smarkets.toString());
    // fd.append('parks', dataUser.sector.parks.toString());
    // fd.append('malls', dataUser.sector.malls.toString());
    // fd.append('ptransport', dataUser.sector.ptransport.toString());
    // fd.append('czone', dataUser.sector.czone.toString());
    // fd.append('user', dataUser.user);
    // fd.append('disabled', dataUser.disabled.toString());
    return this.http.put(this.URL_API + `/${dataUser._id}`, dataUser);
  }

  deleteRstate(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);

  }
}
