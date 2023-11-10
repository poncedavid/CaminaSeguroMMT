import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tuto03',
  templateUrl: './tuto03.page.html',
  styleUrls: ['./tuto03.page.scss'],
})
export class Tuto03Page implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  irTutorial04() {
    this.router.navigate(['/home/tuto04'])
  }
  irRegistro() {
    this.router.navigate(['/registro'])
  }

}
