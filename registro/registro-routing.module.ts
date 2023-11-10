import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPage } from './registro.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPage
  },
  {
    path: 'email',
    loadChildren: () => import('./email/email.module').then( m => m.EmailPageModule)
  },
  {
    path: 'facebook',
    loadChildren: () => import('./facebook/facebook.module').then( m => m.FacebookPageModule)
  },
  {
    path: 'telefono',
    loadChildren: () => import('./telefono/telefono.module').then( m => m.TelefonoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPageRoutingModule {}
