import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [

    { title: 'Inicio',
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

  public labels = [];
  constructor() {}
}
