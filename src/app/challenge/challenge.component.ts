import { Injectable,Component, OnInit, ApplicationRef, ChangeDetectorRef,NgZone  } from '@angular/core';
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
  comment = {user_id:0 , post_id:0};
  Post = {user_id:0 , challenge_id:0 };
  constructor(private challengeService : ChallengeService, private route: ActivatedRoute, private ref: ApplicationRef, private ref1:ChangeDetectorRef, private zone: NgZone ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      
 
       // Retrieve Pet with Id route param
       this.challengeService.getChallenge(id).subscribe(chall => {
        console.log("hhhhh",chall)
      this.challenge = chall;
    })
    });

      
  }
  	

  like(postId){
    this.challengeService.addLike({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId'))}).subscribe((x) => {
    // location.reload()
    });
  }

  disLike(postId){
    this.challengeService.disLike({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId'))}).subscribe((x) => {
    location.reload()
    });
  }

  addComment(postId){
    this.comment.post_id = postId;
    this.comment.user_id = JSON.parse(localStorage.getItem('com.userId'))

    console.log("add comment");
    console.log("hhfhf",this.comment)
    // this.challengeService.addComment(this.comment)
  }

  addPost(Post,challengeId){
    this.Post.challenge_id = challengeId;
    this.Post.user_id = JSON.parse(localStorage.getItem('com.userId'))
    
    console.log(this.Post);
    this.challengeService.addPost (Post).subscribe((x) => {
    location.reload()
    });
  };
 


  
  	// Subscribe to route params
     
  

  ngOnDestroy() {
  // Clean sub to avoid memory leak
  this.sub.unsubscribe();
  }	

}
