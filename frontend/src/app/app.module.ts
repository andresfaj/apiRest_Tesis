import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//Modulo para fomularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//
import { HttpClientModule } from '@angular/common/http';
//Componentes
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DialogComponent, DialogContentExampleDialog } from './components/dialog/dialog.component';
import { PublicationsComponent } from './components/publications/publications.component';
//Rutas-navegacion
import { RouterModule, Routes } from '@angular/router';
//Animations de Angular Material 7
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Import del archivo material.ts que contiene los modulos a usar de angular material 7
import { materialModule } from './material';
//Ngb(bootstrap)Module - Necesario para crear modulos de angular con bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Modulo para trabajar responsive UIs
import {FlexLayoutModule} from '@angular/flex-layout';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { Pruebas2Component } from './components/pruebas2/pruebas2.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    PruebasComponent,
    Pruebas2Component,
    DialogComponent,
    LoginComponent,
    DialogContentExampleDialog,
    PublicationsComponent
  ],
  imports: [ //Depedencias = imports
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    materialModule,
    RouterModule.forRoot([
      {
        path:'post',
        component: PublicationsComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'dialog',
        component: DialogComponent
      },
      {
        path: 'pruebas2',
        component: Pruebas2Component
      },
      {
        path: 'pruebas',
        component: PruebasComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'contactus',
        component: ContactusComponent
      },
      {
      path: 'aboutus',
      component: AboutusComponent
      },
      {
      path: '',
      component: HomeComponent
      }
    ]),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent, DialogContentExampleDialog]
})

export class AppModule { }
