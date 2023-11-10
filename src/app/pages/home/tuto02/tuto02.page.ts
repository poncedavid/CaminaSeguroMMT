import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tuto02',
  templateUrl: './tuto02.page.html',
  styleUrls: ['./tuto02.page.scss'],
})
export class Tuto02Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  irTutorial02() {
    this.router.navigate(['/home/tuto03'])
  }
  irRegistro() {
    this.router.navigate(['/registro'])
  }
}
