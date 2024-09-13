import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LegpresshistPageRoutingModule } from './legpresshist-routing.module';

import { LegpresshistPage } from './legpresshist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LegpresshistPageRoutingModule
  ],
  declarations: [LegpresshistPage]
})
export class LegpresshistPageModule {}
