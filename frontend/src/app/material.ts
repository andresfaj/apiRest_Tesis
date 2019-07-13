//Necesario para crear un modulo de angular
import { NgModule } from '@angular/core';
//Componentes a usar de angular Material
import {MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatInputModule, MatFormFieldModule, MatGridListModule, MatDialogModule, MatSelectModule, MatRadioModule, MatAutocompleteModule, MatTooltipModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule} from '@angular/material';

//Esto se llama un Decorador
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatSelectModule, MatRadioModule, MatAutocompleteModule, MatTooltipModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule],
  exports: [MatButtonModule, MatCheckboxModule, MatMenuModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatTabsModule, MatGridListModule, MatInputModule, MatFormFieldModule, MatDialogModule, MatSelectModule, MatRadioModule, MatAutocompleteModule, MatTooltipModule, MatTableModule, MatSortModule, MatPaginatorModule, MatDividerModule],
})

export class materialModule { }  