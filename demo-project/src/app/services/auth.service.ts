import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  username="admin";
  password="admin";

  constructor(private router: Router) { }
  
  checkLogin(uname: string, pwd: string){
    return ((this.username === uname && this.password === pwd) ? 200 :  403); 
  }
  logout(){
    this.router.navigate(['']);
  }
}
