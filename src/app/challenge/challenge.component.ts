import { Injectable,Component, OnInit, ApplicationRef, ChangeDetectorRef,NgZone  } from '@angular/core';
import { ChallengeService } from '../challenge.service';
// import {RouteParams} from '@angular/router';

import {  ActivatedRoute } from '@angular/router';
import { PostComponent } from '.././post/post.component';



@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.component.html',
  styleUrls: ['./challenge.component.css']
  // directives: [PostComponent]
})
export class ChallengeComponent implements OnInit {
	challenge:Object = {};
	private sub;
  
  constructor(private challengeService : ChallengeService, private route: ActivatedRoute, private ref: ApplicationRef, private ref1:ChangeDetectorRef, private zone: NgZone ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      this.challengeService.getChallenge(id).subscribe(chall => {
        console.log(chall)
        this.challenge = chall;
      })
    });      
  }
 


  

  ngOnDestroy() {
    // Clean sub to avoid memory leak
    this.sub.unsubscribe();
  }	

}
