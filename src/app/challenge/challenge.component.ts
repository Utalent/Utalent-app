import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';
// import {RouteParams} from '@angular/router';

import {  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
})
export class ChallengeComponent implements OnInit {
	challenge = {};
	private sub;
  constructor(private challengeService : ChallengeService, private route: ActivatedRoute ) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

        let id = params['id'];

       // Retrieve Pet with Id route param
       this.challengeService.getChallenge(id).subscribe(chall => {
        console.log("hhhhhhhhhhhhhhhhhhh")
      this.challenge = chall;
    })
    });

  	  
  }
  
  	// Subscribe to route params
     
  

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();



  	// this.challengeService.getChallenge().subscribe(challenge => {
  	// 	this.challenge = challenge;
  	// })
  }	

  

}
