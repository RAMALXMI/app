import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
userid: string;
password: string;
error: string;
  constructor(public router :Router) { }

  ngOnInit() {
  }
  login(){
    console.log('userid',this.userid);
    console.log('password',this.password);
    if(this.userid === 'Asha'){
      if(this.password === 'user'){
        this.router.navigate(['home']);
      }
    }
    else if (this.userid === 'Dev'){
      if(this.password === 'test'){
        this.router.navigate(['home']);
      }
    }
    else if (this.userid === 'Shreya'){
      if(this.password === 'code'){
        this.router.navigate(['home']);
      }
    }
    else{
      this.error='invalid password';
    }
  }
}
