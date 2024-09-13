import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegpressPageRoutingModule } from './legpress-routing.module';

import { LegpressPage } from './legpress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegpressPageRoutingModule
  ],
  declarations: [LegpressPage]
})
export class LegpressPageModule {}
