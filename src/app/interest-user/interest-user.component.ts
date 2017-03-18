import { Component, OnInit } from '@angular/core';
import { InterestUserService } from '../interest-user.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-interest-user',
  templateUrl: './interest-user.component.html',
  styleUrls: ['./interest-user.component.css']
})
export class InterestUserComponent implements OnInit {

  interest:any; 

  constructor(private route: ActivatedRoute, private interestUserService : InterestUserService ) { }
    private sub;

  ngOnInit() {
  }


  GetUserInterests(){
	  this.sub = this.route.params.subscribe(params => {
	  	let userId= params['user_id'];
	  	// this.name=username
	  	this.interestUserService.getUserInterests({user_id: userId}).subscribe(interest=>
	  		this.interest=interest);
	  })
  }  


}
