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
      for (let obj of ele){
        obj.click_class ='fadeInUp animated single-creative-member'
      }
      this.interests = ele;
      console.log(this.interests)
    });
  };

  addInterest(interest, event) {
    event.stopPropagation();
    if (this.selected.indexOf(interest) > -1) {
      this.selected.splice(this.selected.indexOf(interest), 1);
      interest.click_class = 'fadeInUp animated clickme';
    } else {
      this.selected.push(interest);
      interest.click_class = 'fadeInUp animated single-creative-member';
    }
  }

  submit(){
    this.interestsService.submitInterests({user_id: localStorage.getItem('com.userId'),interests: this.selected}).subscribe( (e) => {
      this.router.navigate(['/users/' + localStorage.getItem('com.username')]);

    }); 
  }

}
