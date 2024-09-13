import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RopepushdownhistPageRoutingModule } from './ropepushdownhist-routing.module';

import { RopepushdownhistPage } from './ropepushdownhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RopepushdownhistPageRoutingModule
  ],
  declarations: [RopepushdownhistPage]
})
export class RopepushdownhistPageModule {}
