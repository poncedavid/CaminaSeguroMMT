import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tuto01',
  templateUrl: './tuto01.page.html',
  styleUrls: ['./tuto01.page.scss'],
})
export class Tuto01Page implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }

  irTutorial02() {
    this.router.navigate(['/home/tuto02'])
  }
  irRegistro() {
    this.router.navigate(['/registro'])
  }

}
