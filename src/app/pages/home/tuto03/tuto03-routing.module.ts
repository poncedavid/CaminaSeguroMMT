import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tuto03Page } from './tuto03.page';

const routes: Routes = [
  {
    path: '',
    component: Tuto03Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tuto03PageRoutingModule {}
