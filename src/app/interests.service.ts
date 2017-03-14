import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class InterestsService {
  constructor(private http: Http) { }
	
	getAllInterest(){
  	return this.http.get('/api/interests').map( res => res.json()); 
  }

  submitInterests(data){
  	return this.http.post('/api/usersInterests', data).map( res => {
      // return res.json();
    });
  }
}