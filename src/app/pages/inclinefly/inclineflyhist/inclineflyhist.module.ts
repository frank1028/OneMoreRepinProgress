import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InclineflyhistPageRoutingModule } from './inclineflyhist-routing.module';

import { InclineflyhistPage } from './inclineflyhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InclineflyhistPageRoutingModule
  ],
  declarations: [InclineflyhistPage]
})
export class InclineflyhistPageModule {}
