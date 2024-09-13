import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegpresscalfPageRoutingModule } from './legpresscalf-routing.module';

import { LegpresscalfPage } from './legpresscalf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegpresscalfPageRoutingModule
  ],
  declarations: [LegpresscalfPage]
})
export class LegpresscalfPageModule {}
