import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuto04',
  templateUrl: './tuto04.page.html',
  styleUrls: ['./tuto04.page.scss'],
})
export class Tuto04Page implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  irTutorial05() {
    this.router.navigate(['/home/tuto05'])
  }
  irRegistro() {
    this.router.navigate(['/registro'])
  }

}
