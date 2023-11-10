import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tuto01Page } from './tuto01.page';

const routes: Routes = [
  {
    path: '',
    component: Tuto01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tuto01PageRoutingModule {}
