import { Component, OnInit, ChangeDetectorRef, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InterestUserComponent } from '../interest-user/interest-user.component';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
 
  private sub;
  image : any;
  photo : any;
  user : Object = {};
  username : string;
  constructor(private profileService: ProfileService,
              private changeDetectorRef: ChangeDetectorRef,
              private route: ActivatedRoute ) { }
  
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.username= params['username'];
      this.profileService.getProfile({username: JSON.parse(this.username)}).subscribe(info=>{
        this.user = info
      });
    })
  }
  
  // upload image start
  fileChange(input){
    this.readFiles(input.files);
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

  Addphoto(image){
    this.sub = this.route.params.subscribe(params => {
      let username= params['username'];
      this.profileService.Addphoto({image:image, username:JSON.parse(username)}).subscribe(d=>{
      });          
    })
    this.refresh()
  }

  refresh() {
    this.profileService.getProfile({username: JSON.parse(this.username)}).subscribe(info=>{
        this.user = info
      });
  }

}