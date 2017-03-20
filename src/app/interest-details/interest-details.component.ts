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
	constructor(private interestsService : InterestsService, 
				private route: ActivatedRoute, 
				private router: Router) { }

	ngOnInit() {
			// if(localStorage.getItem('com.utalent')){
				this.sub = this.route.params.subscribe(params => {
					let name = params['name'];
			    	this.interestsService.getInterest(name).subscribe(res => {
			    		console.log(res)
			       		this.interest = res;
			    	})
				});
			// }
			// else{
			// 	this.router.navigate(['/']);
			// }

	}

	
	// ngOnDestroy() {
 //  		// Clean sub to avoid memory leak
 //  		this.sub.unsubscribe();
	// }	

}
