import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RstateService } from '../../services/rstate/rstate.service';
import { RealState } from 'src/app/models/rstate';

@Component({
  selector: 'app-aframe360',
  templateUrl: './aframe360.component.html',
  styleUrls: ['./aframe360.component.css']
})
export class Aframe360Component implements OnInit {

  hidemenu = false;
  currentObject: any;
  restate: any;
  imageUrl="localhost:8000";

  constructor(private route: ActivatedRoute,
    private rstateService: RstateService) { }

  ngOnInit() {
    this.hideAllFurniture();
    this.getidPost();
  }

  getidPost(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.rstateService.getRstate(id).subscribe(
      post => {
        this.restate = new RealState();        
        this.restate = post;
        console.log("POST",this.restate);
      }
    )
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

  hideAllFurniture(){
    var el = document.querySelector("#myChair");
    el.setAttribute("visible","false");

    var el = document.querySelector("#mySofa");
    el.setAttribute("visible","false");

    var el = document.querySelector("#myBed");
    el.setAttribute("visible","false");

    var el = document.querySelector("#myDesk");
    el.setAttribute("visible","false");

    var el = document.querySelector("#myTable");
    el.setAttribute("visible","false");

    var el = document.querySelector("#myWardrobe");
    el.setAttribute("visible","false");    
  }

  selectObject(objectS: number): any{
    if(objectS == 1){
      var object = "#myChair";
    }
    if(objectS == 2){
      var object = "#myTable";
    }
    if(objectS == 3){
      var object = "#mySofa";
    }
    if(objectS == 4){
      var object = "#myBed";
    }
    if(objectS == 5){
      var object = "#myDesk";
    }
    if(objectS == 6){
      var object = "#myWardrobe";
    }
    return object;
  }

  showFurniture(objectR: number){
    var object = this.selectObject(objectR);
    console.log("objeto seleccionado:",object);
    this.currentObject = object;
    var el = document.querySelector(object);
    el.setAttribute("visible","true");
  }

  hideFurniture() {
    var el = document.querySelector(this.currentObject);
    el.setAttribute("visible","false");
  }

}
