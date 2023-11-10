import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tuto03PageRoutingModule } from './tuto03-routing.module';

import { Tuto03Page } from './tuto03.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tuto03PageRoutingModule
  ],
  declarations: [Tuto03Page]
})
export class Tuto03PageModule {}
