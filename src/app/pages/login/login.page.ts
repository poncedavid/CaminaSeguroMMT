import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  token ="CLAVE_TOKEN";

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  login(){
    localStorage.setItem('token', this.token);
    this.router.navigate(['/home']);
  }

}
