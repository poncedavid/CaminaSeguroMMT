import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'tuto01',
    loadChildren: () => import('./tuto01/tuto01.module').then( m => m.Tuto01PageModule)
  },
  {
    path: 'tuto02',
    loadChildren: () => import('./tuto02/tuto02.module').then( m => m.Tuto02PageModule)
  },
  {
    path: 'tuto03',
    loadChildren: () => import('./tuto03/tuto03.module').then( m => m.Tuto03PageModule)
  },
  {
    path: 'tuto04',
    loadChildren: () => import('./tuto04/tuto04.module').then( m => m.Tuto04PageModule)
  },
  {
    path: 'tuto05',
    loadChildren: () => import('./tuto05/tuto05.module').then( m => m.Tuto05PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
