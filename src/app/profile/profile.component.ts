import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProfileService } from '../profile.service';
import {  ActivatedRoute } from '@angular/router';
import { InterestUserComponent } from '../interest-user/interest-user.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  image:any;
  name:any;
  constructor(private profileService: ProfileService,private changeDetectorRef: ChangeDetectorRef, private route: ActivatedRoute ) {
   }
  private sub;
  

  ngOnInit() {
  }

   // this.getPhoto()
  // upload image start
  fileChange(input){
    this.readFiles(input.files);
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



  readFiles(files){
    // Create the file reader
    let reader = new FileReader();
    // If there is a file
    if (files[0]){
      // Start reading this file
      this.readFile(files[0], reader, (result) =>{
        // Create an img element and add the image file data to it
        this.image=result; 
        this.Addphoto(result)
      });
    }else{
      // When all files are done This forces a change detection
      this.changeDetectorRef.detectChanges();
    }
  }
  // upload image end 

  Addphoto(image){
    this.sub = this.route.params.subscribe(params => {
      let username= params['username'];
      
      this.name=JSON.parse(username)
      this.profileService.Addphoto({image:image, username:JSON.parse(username)}).subscribe(d=>{
      });          
    })
  }
  photo:any;

  getPhoto(){
    this.sub = this.route.params.subscribe(params => {
      let username= params['username'];
      console.log(username)
      this.name=JSON.parse(username)
      this.profileService.getphoto({username: username}).subscribe(image=>
        this.photo=image);
    })
  }
}