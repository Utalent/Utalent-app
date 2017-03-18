import { Component, OnInit } from '@angular/core';
import { InterestUserService } from '../interest-user.service';
import {  ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-interest-user',
  templateUrl: './interest-user.component.html',
  styleUrls: ['./interest-user.component.css']
})
export class InterestUserComponent implements OnInit {

  interests:any; 

  constructor(private route: ActivatedRoute, private interestUserService : InterestUserService ) { }
    private sub;

  ngOnInit() {
      
      let userId= localStorage.getItem('com.userId')
      console.log(userId)
      this.interestUserService.getUserInterests( {user_id:userId}).subscribe(interest=>{
        this.interests=interest
      console.log(interest)
        
      })
    
  }

}
