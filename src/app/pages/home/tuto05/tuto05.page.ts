import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuto05',
  templateUrl: './tuto05.page.html',
  styleUrls: ['./tuto05.page.scss'],
})
export class Tuto05Page implements OnInit {
  constructor( private router: Router) { }

  ngOnInit() {
  }

  irTutorial05() {
    this.router.navigate(['/home'])
  }
  irRegistro() {
    this.router.navigate(['/registro'])
  }

}
