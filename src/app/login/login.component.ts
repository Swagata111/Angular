import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
    model: UserPojo = {
      userName: '',
      password: ''
    };

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  login():void
  {
   
    let url="http://localhost:9080/login";
     this.http.post(url,this.model).subscribe((res: Response) => {
       alert('You have been logged in successfully!!');
      location.href= 'http://localhost:4200';
  },

  (error) => {
    alert('Invalid Login Credentials! Try Again!!');
    location.href= 'http://localhost:4200/login';
  }
  ) }
  
  // location.href= 'http://localhost:4200/login';
  
}
  
export interface UserPojo {
  userName: string;
  password: string;
}