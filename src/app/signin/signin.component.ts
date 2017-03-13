import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import 'rxjs/add/operator/map';

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

    this.authService.signin(this.user).map(data =>{ 

       if (data){
          localStorage.setItem('com.utalent',JSON.stringify(data.token))
          localStorage.setItem('com.userId',JSON.stringify(data.id))
        }
  })
  }
}


