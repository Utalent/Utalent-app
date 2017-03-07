import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signin(user) {

  	console.log("yyyyy", user)
  	return this.http.post('/api/users/signin', user)
  }

}
