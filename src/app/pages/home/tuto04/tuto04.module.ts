import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tuto04PageRoutingModule } from './tuto04-routing.module';

import { Tuto04Page } from './tuto04.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tuto04PageRoutingModule
  ],
  declarations: [Tuto04Page]
})
export class Tuto04PageModule {}
