import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { UserService } from '../../services/user.service';
import { RstateService } from '../../services/rstate/rstate.service';
import { Observable, empty } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { Departmentgroup } from 'src/app/interfaces/departmentgroup';
import { Multipleoptions } from 'src/app/interfaces/multipleoptions';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { DialogpostComponent } from '../dialogs/dialogs.component';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [UserService, RstateService]
})
export class PostComponent implements OnInit {
  
  constructor(private fb: FormBuilder, private userService: UserService, private rState: RstateService, private dialog: MatDialog, private router: Router) { }

  formPost: FormGroup;
  informationUser: any;
  imageUrl: string = "/assets/images/housecreate.png";
  imageUrl2: string = "/assets/images/360-degrees.png";
  labelPosition: string = 'before';
  selectedFile: File = null;
  selectedFile2: File = null;
  fd = new FormData();
  tipoInmueble: any = [
    {value: 'Apartment'},
    {value: 'Home'},
    {value: 'Estate'}
  ]

  antiquitys: Multipleoptions[] = [
    {value: 1, viewValue:'New'},
    {value: 2, viewValue: 'About construction plans'},
    {value: 3, viewValue: 'Between 0 and 5 years'},
    {value: 4, viewValue: 'Between 5 and 10 years'},
    {value: 5, viewValue: 'Between 10 and 20 years'},
    {value: 6, viewValue: 'More than 20 years'}
  ]

  bedrooms: Multipleoptions[] = [
    {value: 1, viewValue:'One' },
    {value: 2, viewValue:'Two' },
    {value: 3, viewValue:'Three' },
    {value: 4, viewValue:'Four' },
    {value: 5, viewValue:'Five or more' }
  ]

  citys: any[] = [ ]

  departments: Departmentgroup[] = [
    {letter: 'A', names:['Antioquia','Arauca','Atlántico']},
    {letter: 'B', names:['Bolívar','Boyacá']},
    {letter: 'C', names:['Caldas','Caquetá','Casanare','Cauca','Cesar','Chocó','Córdoba','Cundinamarca']},
    {letter: 'G', names:['Guainía','Guaviare']},
    {letter: 'H', names:['Huila']},
    {letter: 'L', names:['La Guajira']},
    {letter: 'M', names:['Magdalena','Meta']},
    {letter: 'N', names:['Nariño','Norte de Santander']},
    {letter: 'P', names:['Putumayo']},
    {letter: 'Q', names:['Quindío']},
    {letter: 'S', names:['San Andrés y Providencia','Santander','Sucre']},
    {letter: 'T', names:['Tolima']},
    {letter: 'V', names:['Valle del Cauca','Vaupés','Vichada']}

  ];

  departmentsOptions: Observable<Departmentgroup[]>;

  ngOnInit() {
    this.createForm();    
    this.departmentsOptions = this.formPost.get('department')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  }

  createForm(){
    this.informationUser = this.userService.getInformation();
    this.formPost = this.fb.group({
      image2d: [null, Validators.required],
      typeProperty: ['', Validators.required],
      typeOffer: ['sale', Validators.required],
      price: [null, Validators.required],
      negotiable: [false],
      incluAdmin: [false],
      adminValue: [null],
      department: [null, Validators.required],
      city: [null, Validators.required],
      neighborhood: [null, Validators.required],
      address: [null, Validators.required],
      area: [null, Validators.required],
      antiquity: [null, Validators.required],
      rooms: [null, Validators.required],
      bathrooms: [null, Validators.required],
      apartmentFloor: [null],
      parking: [null, Validators.required],
      description: [null, Validators.required],
      interior: this.fb.group({
        aircondi: [false],
        jacuzzi: [false],
        fwood: [false],
        cfloor: [false],
        ikitchen: [false],
        akitchen: [false],
      }),
      exterior: this.fb.group({
        pool: [false],
        ccondominium: [false],
        pvisitors: [false]
      }),
      careas: this.fb.group({
        cliving: [false],
        fcourt: [false],
        bcourt: [false],
        tcourt: [false],
        greenery: [false],
        chareas: [false]
      }),
      sector: this.fb.group({
        schoolnear: [false],
        unear: [false],
        smarkets: [false],
        parks: [false],
        malls: [false],
        ptransport: [false],
        czone: [false]
      }),
      user: [this.informationUser],
      disabled: [true]
    });
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

  dialogPost(formDirective: FormGroupDirective){
    let dialogRef = this.dialog.open(DialogpostComponent);

    dialogRef.afterClosed().subscribe(
      res => {
        if(res == "true"){
          this.router.navigate(['/myposts']);
        }
        // if(res == "true"){
        //   this.createForm();
        //   formDirective.resetForm();
        //   // this.formPost.reset();
        //   // this.formPost.clearValidators();
        //   // this.formPost.updateValueAndValidity();
        //   // this.formPost.patchValue({typeOffer:'sale'});
        //   this.imageUrl = "/assets/images/housecreate.png";
        //   this.imageUrl2 = "/assets/images/360-degrees.png";
        //   this.formPost.controls['image2d'].reset();
        //   // this.formPost.controls['user'].setValue(this.informationUser);
        //   // this.formPost.controls['disabled'].setValue(true);

  
          
        // }else{
        //   this.router.navigate(['/myposts']);
        // }
      }
    )
       
  }

  private _filterGroup(value: string): Departmentgroup[] {
    if (value) {
      return this.departments
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.departments;
  } 

  addPost(formPost: FormGroup, formDirective: FormGroupDirective): void{

    console.log(formPost.value);
    
    this.rState.createRstate(this.fd, formPost.value).subscribe(
      res => {
        console.log(res);
        this.dialogPost(formDirective);
      }
    )
  }

  changeValiadminvalue(){
    const precioAdmin = this.formPost.get('adminValue');

    this.formPost.get('typeOffer').valueChanges.subscribe(
      typeOffer => {
        if(typeOffer == "lease"){
          precioAdmin.setValidators([Validators.required]);
        }else if(typeOffer == 'sale'){
          precioAdmin.setValidators(null);
        }
        precioAdmin.updateValueAndValidity();
      }
    )
  }

  changeValiadminvalue2(){
    const precioAdmin = this.formPost.get('adminValue');

    this.formPost.get('incluAdmin').valueChanges.subscribe(
      incluAdmin => {
        if(incluAdmin === true){
          precioAdmin.setValidators(null);
        }else{
          precioAdmin.setValidators([Validators.required]);
        }

        precioAdmin.updateValueAndValidity();
      }
    )
  }

  onChangeDepartment(){
    this.formPost.get('department').valueChanges.subscribe(
      citySelected => {
        if(citySelected == "Valle del Cauca"){
          this.citys = [{value: 'Cali'},{value: 'Buenaventura'},{value: 'Jamundí'},{ value: 'Palmira'},{value: 'Tuluá'},{value: 'Yumbo'}];
        }else if (citySelected == "Antioquia"){
          this.citys = [{value: 'Medellín'}];
        }else if (citySelected == "Arauca"){
          this.citys = [{value: 'Arauca'}];
        }else if (citySelected == "Atlántico"){
          this.citys = [{value: 'Barranquilla'}];
        }else if (citySelected == "Bolívar"){
          this.citys = [{value: 'Cartagena de Indías'}];
        }else if (citySelected == "Boyacá"){
          this.citys = [{value: 'Tunja'}];
        }else if (citySelected == "Caldas"){
          this.citys = [{value: 'Manizales'}];
        }else if (citySelected == "Caquetá"){
          this.citys = [{value: 'Florencia'}];
        }else if (citySelected == "Casanare"){
          this.citys = [{value: 'Yopal'}];
        }else if (citySelected == "Cauca"){
          this.citys = [{value: 'Popayán'}];
        }else if (citySelected == "Cesar"){
          this.citys = [{value: 'Valledupar'}];
        }else if (citySelected == "Chocó"){
          this.citys = [{value: 'Quibdó'}];
        }else if (citySelected == "Córdoba"){
          this.citys = [{value: 'Montería'}];
        }else if (citySelected == "Cundinamarca"){
          this.citys = [{value: 'Bogotá'}];
        }else if (citySelected == "Guainía"){
          this.citys = [{value: 'Inírida'}];
        }else if (citySelected == "Guaviare"){
          this.citys = [{value: 'San José del Guaviare'}];
        }else if (citySelected == "Huila"){
          this.citys = [{value: 'Neiva'}];
        }else if (citySelected == "La Guajira"){
          this.citys = [{value: 'Riohacha'}];
        }else if (citySelected == "Magdalena"){
          this.citys = [{value: 'Santa Marta'}];
        }else if (citySelected == "Meta"){
          this.citys = [{value: 'Villavicencio'}];
        }else if (citySelected == "Nariño"){
          this.citys = [{value: 'Pasto'}];
        }else if (citySelected == "Norte de Santander"){
          this.citys = [{value: 'San José de Cúcuta'}];
        }else if (citySelected == "Putumayo"){
          this.citys = [{value: 'Mocoa'}];
        }else if (citySelected == "Quindío"){
          this.citys = [{value: 'Armenia'}];
        }else if (citySelected == "Risaralda"){
          this.citys = [{value: 'Pereira'}];
        }else if (citySelected == "San Andrés y Providencia"){
          this.citys = [{value: 'San Andrés'}];
        }else if (citySelected == "Santander"){
          this.citys = [{value: 'Bucaramanga'}];
        }else if (citySelected == "Sucre"){
          this.citys = [{value: 'Sincelejo'}];
        }else if (citySelected == "Tolima"){
          this.citys = [{value: 'Ibagué'}];
        }else if (citySelected == "Vaupés"){
          this.citys = [{value: 'Mitú'}];
        }else if (citySelected == "Vichada"){
          this.citys = [{value: 'Puerto Carreño'}];
        }else if(citySelected == ""){
          this.citys = [];
        }
      }
    )
  }

}
