import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
//Modulo para fomularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//Animations de Angular Material 7
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//Import del archivo material.ts que contiene los modulos a usar de angular material 7
import { materialModule } from './material';
//Ngb(bootstrap)Module - Necesario para crear modulos de angular con bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//Modulo para trabajar responsive UIs
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
//Componentes
import { AppComponent } from './app.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
// import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DialogsComponent, DialogloginComponent } from './components/dialogs/dialogs.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    HomeComponent,
    // SignupComponent,
    LoginComponent,
    PublicationsComponent,
    ProfileComponent,
    DialogsComponent,
    DialogloginComponent
  ],
  imports: [ //Depedencias = imports
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    materialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogsComponent, DialogloginComponent]
})

export class AppModule { }
