import { Component, OnInit, Input,NgModule } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import {  ActivatedRoute } from '@angular/router';
import { ChallengeComponent } from '.././challenge/challenge.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	comment = { user_id:0 , post_id:0, text:'' };
  	@Input() pchallenge:Object;

  constructor( private challengeService : ChallengeService) { }

  ngOnInit() {

  }

   //add like
  like(post,postId){
  	
    this.challengeService
    .addLike({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId'))})
    .subscribe(recent => {
     post.likes ++;
    })
  }
  //dislike
  dLike(post,postId){
    this.challengeService
    .disLike({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId'))})
    .subscribe(recent => {
     post.likes --;
    });
  }

   

  //add comment
   Comment(text ,postId){
    this.comment.text = text;
    this.comment.post_id = postId;
    this.comment.user_id = JSON.parse(localStorage.getItem('com.userId'))
    console.log("add comment",this.comment)

    this.challengeService.addComment(this.comment)
    .subscribe(recent =>{
      location.reload()
    })
  }
}
