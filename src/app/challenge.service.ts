import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChallengeService {

  constructor(private http: Http) { }

  getChallenge(challengeId){
  	return this.http.get('/api/', user)
  }

}
