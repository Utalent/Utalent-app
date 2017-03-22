import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

	Addphoto(image){
    return this.http.post('/api/users/photo/'+image.username , image);        
  }
 
  getphoto(username){
		return this.http.get('/api/users/getphoto', username).map(res=>{
			return res.json();
		})
	}


	getProfile(user){
		return this.http.get('/api/users/' + user.username).map(res=>{
			return res.json();
		})

	}
}



