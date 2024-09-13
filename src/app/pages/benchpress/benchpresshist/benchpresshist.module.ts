import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BenchpresshistPageRoutingModule } from './benchpresshist-routing.module';

import { BenchpresshistPage } from './benchpresshist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BenchpresshistPageRoutingModule
  ],
  declarations: [BenchpresshistPage]
})
export class BenchpresshistPageModule {}
