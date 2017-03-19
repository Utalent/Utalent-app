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
  	console.log("in service")
  	return this.http.post('/api/posts/addLike', data).map(res => console.log(res.json()));
  }

  disLike(data){
  	console.log("service disLike",data);
  	return this.http.post('/api/posts/disLike', data).map(res => console.log(res.json()));
  }

  addPost(post){
    console.log("service ",post)
    return this.http.post('/api/posts/add',post).map(res => console.log(res.json()));
  }

  addComment(comment){
    return this.http.post('/api/comments/add',comment).map(res => console.log(res.json()));
  }

  createChallenge(challenge){
    return this.http.post('/api/challenges/add',challenge).map(res => console.log(res.json()));
  }
  
}
