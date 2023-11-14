import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }





  irPerfil(){
    this.router.navigate(['/customers'])
  }
  irAlarma() {
    this.router.navigate(['/alarma'])
  }
  irMapa() {
    this.router.navigate(['/mapa'])
  }
  irNoticias() {
    this.router.navigate(['/noticias'])
  }


}
