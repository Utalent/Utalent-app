import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  signin(user) {
  	return this.http.post('/api/users/signin', user).map(resp => {
     return resp.json();
    });
  }

  signup(user) {
  	return this.http.post('/api/users/signup', user).map(resp => {
      if(resp.status === 500){
        return false;
      }
      else{
        localStorage.setItem('com.utalent',JSON.stringify(data.token))
        return resp.json();
      }
      
    });
  }
  
}
