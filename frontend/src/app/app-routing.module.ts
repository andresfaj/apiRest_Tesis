import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UserpublicationsComponent } from './components/userpublications/userpublications.component';
import { PostComponent } from './components/post/post.component';
import { AuthGuard } from './guards/auhtGuard/auth.guard';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { Aframe360Component } from './components/aframe360/aframe360.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path:'allposts', component: PublicationsComponent },
  { path:'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'myprofile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'myposts', component: UserpublicationsComponent, canActivate: [AuthGuard] },
  { path: 'newpost', component: PostComponent, canActivate: [AuthGuard] },
  { path: 'postdetail/:id', component: PostDetailComponent },
  { path: 'editpost/:id', component: EditPostComponent, canActivate: [AuthGuard]},
  { path: '360view', component: Aframe360Component, canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],  
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
