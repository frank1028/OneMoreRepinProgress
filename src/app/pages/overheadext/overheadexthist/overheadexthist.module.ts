import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverheadexthistPageRoutingModule } from './overheadexthist-routing.module';

import { OverheadexthistPage } from './overheadexthist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverheadexthistPageRoutingModule
  ],
  declarations: [OverheadexthistPage]
})
export class OverheadexthistPageModule {}
