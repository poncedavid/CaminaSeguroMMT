import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage implements OnInit {

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

  irInicio() {
    this.router.navigate(['/home'])
  }

}
