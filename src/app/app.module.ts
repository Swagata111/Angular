import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { DoctorsComponent } from './doctors/doctors.component';
import {RouterModule, Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';


import {HttpClientModule } from '@angular/common/http';
import { FeedbackComponent } from './feedback/feedback.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  {
    path: 'doctors',
    component:DoctorsComponent
  },
  {
  path: 'about',
  component: AboutComponent
  },
   {
     path: 'contact',
     component: FeedbackComponent
    },
    {
      path: 'registration',
      component: RegistrationComponent
     },
     {
      path: 'login',
      component: LoginComponent
     }

]
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DoctorsComponent,
    AboutComponent,
    FeedbackComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   
    RouterModule.forRoot(appRoutes, {enableTracing:true})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }