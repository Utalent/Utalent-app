import { Component, OnInit, Input, NgModule, ChangeDetectorRef, Output, EventEmitter } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ChallengeComponent } from '.././challenge/challenge.component';
import {  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() pchallenge:Object;
  
  Post = {user_id:0, challenge_id:0, img:'', text:''};
	comment = {user_id:0, post_id:0, text:''};
  image:any;
  photo:any;
  id:any;
  private sub;
  private user_id;

  constructor(private challengeService : ChallengeService, 
              private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute ) { }


  ngOnInit() { }

  fileChange(input,p){
    this.readFiles(input.files,p.text);
  }

  readFile(file, reader, callback){
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      callback(reader.result);
    }
  // Read the file
    reader.readAsDataURL(file);
  }

  readFiles(files,text){
    // Create the file reader
    let reader = new FileReader();
    // If there is a file
    if (files[0]){
      // Start reading this file
      this.readFile(files[0], reader, (result) =>{
        // Create an img element and add the image file data to it
        this.Post.img=result; 
        // this.postphoto(result,text)
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }

  //add post
  post(Post, challengeId){
    this.Post.challenge_id = challengeId;
    this.Post.user_id = JSON.parse(localStorage.getItem('com.userId'))
    this.challengeService.addPost(Post).subscribe( () => {
      this.notify.emit('Post Added');
      this.Post.text = "";
      this.Post.img = "";
    });
  }

  //add like
  like(post, postId){
    this.challengeService.addLike({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId'))})
    .subscribe(recent => {
      this.notify.emit('Like');
    })
  }
  //dislike
  dLike(post, postId){
    this.challengeService
    .disLike({post_id: postId , user_id: JSON.parse(localStorage.getItem('com.userId'))})
    .subscribe(recent => {
      this.notify.emit('dis like');
    });
  }

  //add comment
  Comment(text ,postId){
    this.comment.text = text;
    this.comment.post_id = postId;
    this.comment.user_id = JSON.parse(localStorage.getItem('com.userId'))
    this.challengeService.addComment(this.comment).subscribe(recent =>{
      this.notify.emit('Comment Added');
      this.comment.text = "";
    })
  }
}
