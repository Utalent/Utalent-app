import { Component, OnInit, OnChanges } from '@angular/core';
import { InterestsService } from '../interests.service';

import {  ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
	selector: 'app-interest-details',
	templateUrl: './interest-details.component.html',
	styleUrls: ['./interest-details.component.css']
})
export class InterestDetailsComponent implements OnInit {
	interest = {};
	private sub;
	title = "";
	interestName = ""
	constructor(private interestsService : InterestsService, 
				private route: ActivatedRoute, 
				private router: Router) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			this.interestName = params['name'];
	    	this.interestsService.getInterest(this.interestName).subscribe(res => {
	       		this.interest = res;
	       		this.title = res.name.charAt(0).toUpperCase() + res.name.slice(1);
	    	})
		});
	}

	refresh() {
		this.interestsService.getInterest(this.interestName).subscribe(res => {
       		this.interest = res;
	    })
	}

	onNotify(message:string) {
    	this.refresh();
  	}
}
