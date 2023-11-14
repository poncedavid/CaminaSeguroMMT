import { Component } from '@angular/core';

import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Denunciar',
      url: '/denuncia',
      icon: 'warning' },

    { title: 'Perfil',
      url: '/perfil',
      icon: 'body' },

    { title: 'Noticias',
      url: '/customers',
      icon: 'newspaper' },

    { title: 'Alarma',
      url: '/alarma',
      icon: 'flag' },

    // { title: 'Usuarios',
    //   url: '/customers',
    //   icon: 'people' },

    // { title: 'Sedes',
    //   url: '/sedes',
    //   icon: 'location' },

    // { title: 'Información',
    //   url: '/informacion',
    //   icon: 'information-circle' },
  ];


  constructor(
    private router: Router,
  ) {}




  irAlarma() {
    this.router.navigate(['/alarma'])
  }
}
