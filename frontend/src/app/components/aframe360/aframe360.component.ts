import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aframe360',
  templateUrl: './aframe360.component.html',
  styleUrls: ['./aframe360.component.css']
})
export class Aframe360Component implements OnInit {

  hidemenu = false;

  constructor() { }

  ngOnInit() {
  }

  hide(){
    this.hidemenu = true;
  }

  show(){
    if (this.hidemenu == false){
      this.hidemenu = true;
    }else{
      this.hidemenu = false;
    }
  }

}
