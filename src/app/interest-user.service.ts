import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class InterestUserService {
	
  constructor(private http: Http) { }

	getUserInterests(user_id){
	    // console.log(image); 
		return this.http.post('/api/users/Interests' , user_id).map(res=>{
	    	console.log(res.json(),"user Interests");
	        return res.json();;        
	    })
	}

}
