import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegpresscalfhistPageRoutingModule } from './legpresscalfhist-routing.module';

import { LegpresscalfhistPage } from './legpresscalfhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegpresscalfhistPageRoutingModule
  ],
  declarations: [LegpresscalfhistPage]
})
export class LegpresscalfhistPageModule {}
