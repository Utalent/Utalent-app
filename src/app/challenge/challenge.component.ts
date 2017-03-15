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
  comment = {};
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
  	

  addLike(postId){

    console.log("add like");
    console.log({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId')) })
    // this.challengeService.addLike({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId')) });
  }

  addComment(){
    console.log("add comment");
    console.log("hhfhf",this.comment)
    // this.challengeService.addComment(this.comment)
  }


  
  	// Subscribe to route params
     
  

>>>>>>> (feat) likes
  ngOnDestroy() {
  // Clean sub to avoid memory leak
  this.sub.unsubscribe();
  }	

}
