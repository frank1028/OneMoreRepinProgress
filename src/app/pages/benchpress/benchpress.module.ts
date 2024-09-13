import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenchpressPageRoutingModule } from './benchpress-routing.module';

import { BenchpressPage } from './benchpress.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenchpressPageRoutingModule
  ],
  declarations: [BenchpressPage]
})
export class BenchpressPageModule {}
