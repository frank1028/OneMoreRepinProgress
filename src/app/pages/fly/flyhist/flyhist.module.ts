import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FlyhistPageRoutingModule } from './flyhist-routing.module';

import { FlyhistPage } from './flyhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FlyhistPageRoutingModule
  ],
  declarations: [FlyhistPage]
})
export class FlyhistPageModule {}
