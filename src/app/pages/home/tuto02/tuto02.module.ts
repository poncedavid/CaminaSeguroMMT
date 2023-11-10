import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tuto02PageRoutingModule } from './tuto02-routing.module';

import { Tuto02Page } from './tuto02.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tuto02PageRoutingModule
  ],
  declarations: [Tuto02Page]
})
export class Tuto02PageModule {}
