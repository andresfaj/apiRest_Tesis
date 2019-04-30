//Necesario para crear un modulo de angular
import { NgModule } from '@angular/core';
//Componentes a usar de angular Material
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDialogModule} from '@angular/material';

//Esto se llama un Decorador
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule],
})

export class materialModule { }  