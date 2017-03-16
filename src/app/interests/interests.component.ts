import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../interests.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
 
export class InterestComponent implements OnInit {
  selected = [];
  interests=[];

  constructor(private interestsService:InterestsService, private router: Router ) { }
  ngOnInit() {
    this.interestsService.getAllInterest().subscribe(ele=> {
      this.interests = ele;
    });
  };

  addInterest(interest) {
    if (this.selected.indexOf(interest) > -1) {
      this.selected.splice(this.selected.indexOf(interest), 1);
    } else {
      this.selected.push(interest);
    }
  }

  submit(){
    this.interestsService.submitInterests({user_id: localStorage.getItem('com.userId'),interests: this.selected}).subscribe( (e) => {
      this.router.navigate(['/users/' + localStorage.getItem('com.username')]);

    }); 
  }

}
