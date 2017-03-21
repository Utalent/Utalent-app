import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { InterestsService } from '../interests.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(10%, 0, 0)',
        opacity: '0.9'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)',
        opacity: '0.1'

      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
    trigger('bar', [
      state('in', style({
        transform: 'translate3d(20%, 0, 0)',
        opacity: '0.2'
      })),
      state('out', style({
        transform: 'translate3d(145%, 0, 0)',
        opacity: '1'

      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class SidebarComponent implements OnInit {

  interests = [];

  constructor(private interestsService:InterestsService) {  }

  ngOnInit() {
    this.interestsService.getAllInterest().subscribe(ele=> {
      for (let i = 0; i < ele.length; i++){
        this.interests[i] = ele[i]['name'];
      }
    });
  }

  menuState:string = 'out';
  barState: string = 'out'; 
  toggleMenu() {
    // 1-line if statement that toggles the value:
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.barState = this.barState === 'out' ? 'in' : 'out';
  }

}
