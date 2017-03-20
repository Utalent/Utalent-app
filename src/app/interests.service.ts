import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InterestsService {
  constructor(private http: Http) { }
	
	getAllInterest(){
  	return this.http.get('/api/interests').map(res=>res.json()); 
  }

  submit(array){
  	return this.http.post('/api/interests',array);
  }

	getInterest(interestName){
		return this.http.get('/api/interests/' + interestName).map(res => res.json())
	}

  submitInterests(data){
  	return this.http.post('/api/usersInterests', data)
  }
}

