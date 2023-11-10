import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tuto05Page } from './tuto05.page';

const routes: Routes = [
  {
    path: '',
    component: Tuto05Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tuto05PageRoutingModule {}
