import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegexthistPageRoutingModule } from './legexthist-routing.module';

import { LegexthistPage } from './legexthist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegexthistPageRoutingModule
  ],
  declarations: [LegexthistPage]
})
export class LegexthistPageModule {}
