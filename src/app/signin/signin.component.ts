import { Component, OnInit } from '@angular/core';
// import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

// user : any = [] ; 


  constructor() { }

   ngOnInit() {
  	
  	// this.signinService.siginin().subscribe(user => {
  	// 	this.user=user;
  	// });
  }

}


