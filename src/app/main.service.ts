import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MainService {

  constructor(private http: Http) { }

  getAllPosts(){
    return this.http.get('/api/posts').map(res => res.json())
  }

}
