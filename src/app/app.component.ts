import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Denunciar',
      url: '/home',
      icon: 'home' },

    { title: 'Perfil',
      url: '/home',
      icon: 'home' },

    { title: 'Inicio',
      url: '/home',
      icon: 'home' },

    { title: 'Mis denuncias',
      url: '/home',
      icon: 'home' },

    { title: 'Noticias',
      url: '/home',
      icon: 'home' },

    { title: 'Alarma',
      url: '/home',
      icon: 'home' },

    { title: 'Usuarios',
      url: '/customers',
      icon: 'people' },

    { title: 'Sedes',
      url: '/sedes',
      icon: 'location' },

    { title: 'Información',
      url: '/informacion',
      icon: 'information-circle' },
  ];


  constructor() {}
}
