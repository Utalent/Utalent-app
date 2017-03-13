import { Component, OnInit } from '@angular/core';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-interest-challenge',
  templateUrl: './interest-challenge.component.html',
  styleUrls: ['./interest-challenge.component.css']
})
export class InterestChallengeComponent implements OnInit {

  constructor(private challengeService : ChallengeService) { }

  ngOnInit() {

  // 	 ngOnInit(challengeId) {
  // 	this.challengeService.getChallenge(challengeId).subscribe(challenge => 
  // 		this.challenge = challenge;
  	
  	

  // }
  }

}
