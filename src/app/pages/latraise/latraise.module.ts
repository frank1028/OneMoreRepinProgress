import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatraisePageRoutingModule } from './latraise-routing.module';

import { LatraisePage } from './latraise.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatraisePageRoutingModule
  ],
  declarations: [LatraisePage]
})
export class LatraisePageModule {}
