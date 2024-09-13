import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RopepushdownPageRoutingModule } from './ropepushdown-routing.module';

import { RopepushdownPage } from './ropepushdown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RopepushdownPageRoutingModule
  ],
  declarations: [RopepushdownPage]
})
export class RopepushdownPageModule {}
