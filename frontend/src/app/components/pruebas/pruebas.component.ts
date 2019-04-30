import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  users: string[] = ["david", "andres", "jenny"];
  activated: boolean = false;
  
  nombre: string = "Andres Achury";
  edad: number;
  address: {
    street: string;
    city: string;
  }
  hobbies: string[];
  
  constructor() {
    this.edad = 21;
    this.address = {
      street: 'cra 76',
      city: 'cali'
    }
    this.hobbies = ["nadar", "programar"]

  }

  ngOnInit() {
  }

  sayHello() {
    alert("Hello");
  }

  addUser(usuarioNuevo) {
    console.log("El nombre del usuario nuevo:", usuarioNuevo.value);
    this.users.push(usuarioNuevo.value);
    //usuarioNuevo.value = "";
  }

  deleteUser(user: string){
    for(let i = 0; i < this.users.length; i++){
      if(user == this.users[i]){
        this.users.splice(i, 1); //Elimina un usuario del arreglo
      }
    }
  }

}
