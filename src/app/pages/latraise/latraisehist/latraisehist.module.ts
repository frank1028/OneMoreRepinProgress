import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LatraisehistPageRoutingModule } from './latraisehist-routing.module';

import { LatraisehistPage } from './latraisehist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LatraisehistPageRoutingModule
  ],
  declarations: [LatraisehistPage]
})
export class LatraisehistPageModule {}
