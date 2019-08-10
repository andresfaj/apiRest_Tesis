import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RstateService } from 'src/app/services/rstate/rstate.service';
import { RealState } from 'src/app/models/rstate';
import { Multipleoptions } from 'src/app/interfaces/multipleoptions';
import { NgForm } from '@angular/forms';
import { DialogupdatepostComponent } from '../dialogs/dialogs.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  restate: any;
  crestate: RealState = new RealState;
  images = [1, 2, 3].map(() => `https://picsum.photos/1500/500?random&t=${Math.random()}`);
  labelPosition: string = 'before';
  formEditpost: NgForm;
  imageUrl: string;
  imageUrl2: string;
  selectedFile: File = null;
  selectedFile2: File = null;
  fd = new FormData();

  tipoInmueble: any = [
    {value: 'Apartment'},
    {value: 'Home'},
    {value: 'Estate'}
  ]

  citys: string[]= ['Cali','Buenaventura','Jamundí','Palmira','Tuluá','Yumbo', 'Medellín','Arauca','Barranquilla','Cartagena de Indías','Tunja','Manizales','Florencia','Yopal','Popayán','Valledupar','Quibdó','Montería','Bogotá','Inírida','San José del Guaviare','Neiva','Riohacha','Santa Marta','Villavicencio','Pasto','San José de Cúcuta','Mocoa','Armenia','Pereira','San Andrés','Bucaramanga','Sincelejo','Ibagué','Mitú','Puerto Carreño'];
  
  departments: string[] = ['Antioquia','Arauca','Atlántico','Bolívar','Boyacá','Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó','Córdoba','Cundinamarca','Guainía','Guaviare','Huila','La Guajira','Magdalena','Meta','Nariño','Norte de Santander','Putumayo','Quindío','San Andrés y Providencia','Santander','Sucre','Tolima','Valle del Cauca','Vaupés','Vichada'];

  antiquitys: Multipleoptions[] = [
    {value: 1, viewValue:'New'},
    {value: 2, viewValue: 'About construction plans'},
    {value: 3, viewValue: 'Between 0 and 5 years'},
    {value: 4, viewValue: 'Between 5 and 10 years'},
    {value: 5, viewValue: 'Between 10 and 20 years'},
    {value: 6, viewValue: 'More than 20 years'}
  ];

  bedrooms: Multipleoptions[] = [
    {value: 1, viewValue:'One' },
    {value: 2, viewValue:'Two' },
    {value: 3, viewValue:'Three' },
    {value: 4, viewValue:'Four' },
    {value: 5, viewValue:'Five or more' }
  ];

  constructor(
    private route: ActivatedRoute,
    private rstateService: RstateService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.getidPost();
    this.citys.sort();
    
  }

  onFileSelected(event){

    if(event.target.files.length > 0){
      this.selectedFile = <File>event.target.files[0];
      this.fd.append('image', this.selectedFile, this.selectedFile.name);
      // console.log("form data:", this.fd);
      // this.formPost.get('image').setValue(this.fd);

      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.selectedFile);

      // console.log(this.selectedFile);
    }

  }

  onFileSelected2(event){

    if(event.target.files.length > 0){
      this.selectedFile2 = <File>event.target.files[0];
      this.fd.append('image2', this.selectedFile2, this.selectedFile2.name);
      // console.log("form data:", this.fd);
      // this.formPost.get('image').setValue(this.fd);

      var reader = new FileReader();
      reader.onload = (event:any) => {
        this.imageUrl2 = event.target.result;
      }
      reader.readAsDataURL(this.selectedFile2);

      // console.log(this.selectedFile2);
    }

  }

  getidPost(): void{
    const id = this.route.snapshot.paramMap.get('id');
    this.rstateService.getRstate(id).subscribe(
      post => {
        this.restate = new RealState();    
        this.restate = post;
        this.imageUrl = "http://localhost:8000"+this.restate.path;
        this.imageUrl2 = "http://localhost:8000"+this.restate.pathvr;
      }
    )
  }

  dialogUpdatepost(){
    let dialogRef = this.dialog.open(DialogupdatepostComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.router.navigate(['/myposts']);   
        }
      }
    )
  }

  savePost(formEditpost: NgForm){

    this.rstateService.updateRstate(this.fd, this.restate).subscribe(
      res => {
        this.dialogUpdatepost();
      }
    )

  }

}
