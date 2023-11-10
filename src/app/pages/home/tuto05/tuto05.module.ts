import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tuto05PageRoutingModule } from './tuto05-routing.module';

import { Tuto05Page } from './tuto05.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tuto05PageRoutingModule
  ],
  declarations: [Tuto05Page]
})
export class Tuto05PageModule {}
