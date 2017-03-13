import { Component, OnInit } from '@angular/core';
import { InterestsService } from '../interests.service';



@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css']
})
 
export class InterestComponent implements OnInit {
  selected = [];
  interests=[];

  constructor(private interestsService:InterestsService ) { }
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
  console.log(this.selected)
}

submit(array){
  array=this.selected; 
  
}

}


 