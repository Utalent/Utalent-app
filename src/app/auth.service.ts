import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signin(user) {

  	console.log("yyyyy", user)
  	return this.http.post('/api/users/signin', user).map(resp => {
      console.log(resp.json())
     return resp.json();
    });
  }

  signup(user) {

  	console.log("yyyyy", user)
  	return this.http.post('/api/users/signup', user).map(resp => {
      
     return resp.json();
    });
  }


}
