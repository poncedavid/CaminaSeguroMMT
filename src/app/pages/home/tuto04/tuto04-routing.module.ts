import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tuto04Page } from './tuto04.page';

const routes: Routes = [
  {
    path: '',
    component: Tuto04Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tuto04PageRoutingModule {}
