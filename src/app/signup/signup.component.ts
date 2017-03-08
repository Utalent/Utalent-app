import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})



export class SignupComponent implements OnInit {


 user ={};

  constructor (private authService: AuthService) { }
 

  ngOnInit() {

   }
   
  signup() {
    console.log("ttttttttttt",this.user)
    this.authService.signup(this.user).subscribe(user => {
    
    });

}

}