import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';




@Injectable()
export class InterestUserService {
	
  constructor(private http: Http) { }

	getUserInterests(user){
		return this.http.get('/api/getUserselected/'+ JSON.parse(user.user_id)).map(res=>{
	        return res.json();;        
	    })
	}

}
