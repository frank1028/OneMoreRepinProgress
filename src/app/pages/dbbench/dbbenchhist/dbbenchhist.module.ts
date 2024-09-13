import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbbenchhistPageRoutingModule } from './dbbenchhist-routing.module';

import { DbbenchhistPage } from './dbbenchhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbbenchhistPageRoutingModule
  ],
  declarations: [DbbenchhistPage]
})
export class DbbenchhistPageModule {}
