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
  	 //add post 
   post(Post,challengeId){
    this.Post.challenge_id = challengeId;
    this.Post.user_id = JSON.parse(localStorage.getItem('com.userId'))
    console.log(this.Post);
    this.challengeService.addPost (Post).subscribe((x) => {
    location.reload()
    });
  };

  // addComment(postId){
  //   this.comment.post_id = postId;
  //   this.comment.user_id = JSON.parse(localStorage.getItem('com.userId'))

  //   console.log("add comment");
  //   console.log(this.comment)
  //   this.challengeService.addComment(this.comment)
  // }

  


  
  	// Subscribe to route params
     
  

  ngOnDestroy() {
  // Clean sub to avoid memory leak
  this.sub.unsubscribe();
  }	

}
