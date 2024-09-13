import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BentoverrowhistPageRoutingModule } from './bentoverrowhist-routing.module';

import { BentoverrowhistPage } from './bentoverrowhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BentoverrowhistPageRoutingModule
  ],
  declarations: [BentoverrowhistPage]
})
export class BentoverrowhistPageModule {}
