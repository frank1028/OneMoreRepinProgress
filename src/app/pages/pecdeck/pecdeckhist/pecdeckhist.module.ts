import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PecdeckhistPageRoutingModule } from './pecdeckhist-routing.module';

import { PecdeckhistPage } from './pecdeckhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PecdeckhistPageRoutingModule
  ],
  declarations: [PecdeckhistPage]
})
export class PecdeckhistPageModule {}
