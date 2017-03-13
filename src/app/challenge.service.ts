import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChallengeService {

  constructor(private http: Http) { }
  
  
  getChallenge(challengeId){
    return this.http.get('/api/challenges/' + challengeId).map(res => res.json())
  }

  
}
