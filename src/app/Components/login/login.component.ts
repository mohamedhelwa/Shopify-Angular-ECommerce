import { Component, OnInit } from '@angular/core';
import { User } from '../../ViewModels/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User("test@domain.com", "123456");
  submitted = false;



  constructor() { }

  onSubmit() { 
    this.submitted = true; 
    console.log(`Email: ${this.user.Email}\nPassword: ${this.user.Password}`);
  }
  
  ngOnInit(): void {
  }

}
