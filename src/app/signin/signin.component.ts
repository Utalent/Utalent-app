import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  user = {}; 


  constructor(private authService: AuthService) { }

   ngOnInit() {
  }
  signin() {
    console.log(this.user)
    this.authService.signin(this.user).subscribe(user => {
    
    });
    
  }



}


