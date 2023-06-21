import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  username="";
  password="";
  errorMsg="";
  successCode=200;
  title="Rotten Apples";
  description=`Rotten Tomatoes and the Tomatometer score are the world’s most trusted recommendation resources for quality
  entertainment. As the leading online aggregator of movie and TV show reviews from critics, we provide fans with
  a comprehensive guide to what’s Fresh – and what’s Rotten – in theaters and at home. And the Tomatometer is just
  the beginning. We also serve movie and TV fans with original editorial content on our site and through social
  channels, produce fun and informative video series, and hold live events for fans across the country, with our
  ‘Your Opinion Sucks’ live shows. If you’re an entertainment fan looking for a recommendation, or to share an
  opinion, you’ve come to the right place.`;
  formMsg=`This form is submitted using Event Binding. Username and password are examples of 2 way binding.
  You can login with admin/admin`;


  constructor(private authService: AuthService, private router: Router){}
  ngOnInit(): void {
  }
  
  login(){
    if(this.username.trim().length === 0)
      this.errorMsg="Username is required";
      else if (this.password.trim().length === 0)
        this.errorMsg = "Password is required";
      else {
        this.errorMsg = "";
        let code = this.authService.checkLogin(this.username, this.password);
        if(code === this.successCode)
          this.router.navigate(['home']);
        else
          this.errorMsg="Invalid Credentials";
      }
  }
}
