import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pruebas2',
  templateUrl: './pruebas2.component.html',
  styleUrls: ['./pruebas2.component.css']
})
export class Pruebas2Component implements OnInit {

  @Input() usuarios;

  constructor() { }

  ngOnInit() {
  }

}
