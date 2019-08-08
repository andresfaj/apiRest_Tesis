import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Form } from '../../models/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  readonly URL_API = 'http://localhost:8000/emailsend';

  constructor(private http: HttpClient) {

  }

  sendMail(contactForm: Form){
    return this.http.post(this.URL_API, contactForm);
  }
  
}
