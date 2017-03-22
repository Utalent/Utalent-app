import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ChallengeService {

  constructor(private http: Http) { }
  
  
  getChallenge(challengeId){
    return this.http.get('/api/challenges/' + challengeId).map(res => res.json())
  }

  addLike(data){
  	return this.http.post('/api/posts/addLike',data).map(res => res.json());
  }

  disLike(data){
  	return this.http.post('/api/posts/disLike',data).map(res => res.json());
  }

  addPost(post){
    return this.http.post('/api/posts/add',post).map(res => res.json());
  }

  addComment(comment){
    return this.http.post('/api/comments/add',comment).map(res => res.json());
  }

  createChallenge(challenge){
    return this.http.post('/api/challenges/add',challenge).map(res => {
      res.json()
    })
  }
  
}
