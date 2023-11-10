import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tuto01PageRoutingModule } from './tuto01-routing.module';

import { Tuto01Page } from './tuto01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tuto01PageRoutingModule
  ],
  declarations: [Tuto01Page]
})
export class Tuto01PageModule {}
