import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: UserPojo = {
    userName: '',
    userMail: '',
    phone: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  register(): void 
  {
     let url="http://localhost:9080/register";
     this.http.post(url,this.model).subscribe();
     alert('You have successfully registered!');
     location.href= 'http://localhost:4200';
  }
}


export interface UserPojo {
  userName: string;
  userMail: string;
  phone: string;
  password: string;
  confirmPassword:string;

}
