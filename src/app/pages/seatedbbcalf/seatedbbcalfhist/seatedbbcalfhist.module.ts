import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedbbcalfhistPageRoutingModule } from './seatedbbcalfhist-routing.module';

import { SeatedbbcalfhistPage } from './seatedbbcalfhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedbbcalfhistPageRoutingModule
  ],
  declarations: [SeatedbbcalfhistPage]
})
export class SeatedbbcalfhistPageModule {}
