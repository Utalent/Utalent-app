import { Component, OnInit } from '@angular/core';
import { MainService } from '../main.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  posts = [];

  constructor(private mainService: MainService) { }

  ngOnInit() {
  	this.mainService.getAllPosts().subscribe(res => {
        console.log(res)
        this.posts = res;
      })
  }

}
