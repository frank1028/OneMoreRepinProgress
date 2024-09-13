import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UhpulldownhistPageRoutingModule } from './uhpulldownhist-routing.module';

import { UhpulldownhistPage } from './uhpulldownhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UhpulldownhistPageRoutingModule
  ],
  declarations: [UhpulldownhistPage]
})
export class UhpulldownhistPageModule {}
