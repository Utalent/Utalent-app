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
  interests =  [];

  constructor(private interestsService:InterestsService, private router: Router ) { }
  ngOnInit() {
    this.interestsService.getAllInterest().subscribe(ele=> {
      ele.button_class = 'btn btn-primary';
      this.interests = ele;
    });
  };

  addInterest(interest) {
    if (this.selected.indexOf(interest) > -1) {
      this.selected.splice(this.selected.indexOf(interest), 1);
      //this.interests.button_class = 'btn btn-primary';
    } else {
      this.selected.push(interest);
      //this.interests.button_class = 'btn btn-default';
    }
  }

  submit(){
    this.interestsService.submitInterests({user_id: localStorage.getItem('com.userId'),interests: this.selected}).subscribe( (e) => {
      this.router.navigate(['/users/' + localStorage.getItem('com.username')]);

    }); 
  }

}
