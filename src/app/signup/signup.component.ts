import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {
  
  user ={};

  constructor (private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
   
  signup() {
    this.authService.signup(this.user).subscribe(data => {
       
           this.router.navigate(['interest'])
          localStorage.setItem('com.utalent',JSON.stringify(data.token))
          localStorage.setItem('com.username',JSON.stringify(data.username))
          localStorage.setItem('com.userId',JSON.stringify(data.id))
    })
  }
}