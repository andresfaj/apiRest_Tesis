import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
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
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DialogsComponent, DialogloginComponent, DialogemptyloginComponent, DialogsignupComponent, DialogprofileComponent, DialogpostComponent, DialogdeletepostComponent, DialogdeletepostsucessComponent, DialogupdatepostComponent, DialogexistinguserComponent, DialogcontactformComponent } from './components/dialogs/dialogs.component';
import { UserpublicationsComponent } from './components/userpublications/userpublications.component';
import { PostComponent } from './components/post/post.component';
import { FilterpublicationsPipe } from './pipes/filterpublications.pipe';
import { NgxCurrencyModule } from "ngx-currency";
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { Aframe360Component } from './components/aframe360/aframe360.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactusComponent,
    FooterComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    PublicationsComponent,
    ProfileComponent,
    DialogsComponent,
    DialogloginComponent,
    DialogemptyloginComponent,
    DialogsignupComponent,
    DialogprofileComponent,
    UserpublicationsComponent,
    PostComponent,
    DialogpostComponent,
    FilterpublicationsPipe,
    DialogdeletepostComponent,
    DialogdeletepostsucessComponent,
    DialogupdatepostComponent,
    DialogexistinguserComponent,
    DialogcontactformComponent,
    PostDetailComponent,
    EditPostComponent,
    Aframe360Component
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
    AppRoutingModule,
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [DialogsComponent, DialogloginComponent, DialogemptyloginComponent, DialogsignupComponent, DialogprofileComponent, DialogpostComponent, DialogdeletepostComponent, DialogdeletepostsucessComponent, DialogupdatepostComponent, DialogexistinguserComponent, DialogcontactformComponent],
  
})

export class AppModule { }
