import { Component, OnInit, Input, NgModule, ChangeDetectorRef } from '@angular/core';
import { ChallengeService } from '../challenge.service';
import { ChallengeComponent } from '.././challenge/challenge.component';
import {  ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
	comment = { user_id:0 , post_id:0, text:'' };
  	@Input() pchallenge:Object;
    Post = {user_id:0 , challenge_id:0 };
    image:any;
    photo:any;
    id:any;


  constructor( private challengeService : ChallengeService, private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute ) { }
  private sub;
  private user_id;

  ngOnInit() {

  }


  fileChange(input,p){
    console.log("*************",p.text)
    this.readFiles(input.files,p.text);
  }

  readFile(file, reader, callback){
    // Set a callback funtion to fire after the file is fully loaded
    reader.onload = () => {
      // callback with the results
      // console.log(reader.result)
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
        this.image=result; 
        console.log(this.image)
        this.postphoto(result,text)
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  // upload image end 

  postphoto(image,text){
    console.log("8885858",text)
      this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.user_id = JSON.parse(localStorage.getItem('com.userId'))
      this.challengeService.Addphoto({img:image , challenge_id: this.id , user_id: this.user_id ,text:text}).subscribe(d=>{
        location.reload()
      });          
    })         
    }
  









  post(Post,challengeId){
      console.log("7777",challengeId)
    this.Post.challenge_id = challengeId;
    this.Post.user_id = JSON.parse(localStorage.getItem('com.userId'))
    console.log(this.Post);
    this.challengeService.addPost (Post).subscribe((x) => {
    location.reload()
    });
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
