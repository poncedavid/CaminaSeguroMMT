import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tuto02Page } from './tuto02.page';

const routes: Routes = [
  {
    path: '',
    component: Tuto02Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tuto02PageRoutingModule {}
