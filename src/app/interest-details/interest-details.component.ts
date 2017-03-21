import { Component, OnInit } from '@angular/core';
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
	constructor(private interestsService : InterestsService, 
				private route: ActivatedRoute, 
				private router: Router) { }

	ngOnInit() {
		this.sub = this.route.params.subscribe(params => {
			let name = params['name'];
	    	this.interestsService.getInterest(name).subscribe(res => {
	    		console.log(res)
	       		this.interest = res;
	       		this.title = res.name.charAt(0).toUpperCase() + res.name.slice(1);
	    	})
		});
	}

	
	// ngOnDestroy() {
 //  		// Clean sub to avoid memory leak
 //  		this.sub.unsubscribe();
	// }	

}
