import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class CheckLoggedIn implements CanActivate {
  constructor( private router: Router) {}

  canActivate() {
  	if(localStorage.getItem('com.utalent')){
  		return true
  	}
  	this.router.navigate([''])
  	return false
  }
}  