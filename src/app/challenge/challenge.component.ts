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
      this.challengeService.getChallenge(id).subscribe(chall => {
        this.challenge = chall;
      })

        let id = params['id'];

       // Retrieve Pet with Id route param
       this.challengeService.getChallenge(id).subscribe(chall => {
        console.log("hhhhh",chall)
      this.challenge = chall;
    })
    });
  }
  	

  addLike(){
    console.log("add like");
    // this.challengeService.addLike();
  }


  
  	// Subscribe to route params
     
  

>>>>>>> (feat) likes
  ngOnDestroy() {
  // Clean sub to avoid memory leak
  this.sub.unsubscribe();
  }	

}
