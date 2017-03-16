import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProfileService {

  constructor(private http: Http) { }

	Addphoto(image){
	  	console.log(image); 
        return this.http.post('/api/users/photo/'+image.username , image);        
    }

    
    getphoto(username){
console.log(username)
  		return this.http.post('/api/users/getphoto', username).map(res=>{

console.log(res.json());
  			return res.json();
 
  			
  		}

 )
	}


  getUserInterests(user_id){
      // console.log(image); 
        return this.http.post('/api/users/Interests' , user_id).map(res=>{

  console.log(res.json(),"user Interests");
        return res.json();;        
    })
}



}



