import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeatedbbcalfPageRoutingModule } from './seatedbbcalf-routing.module';

import { SeatedbbcalfPage } from './seatedbbcalf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeatedbbcalfPageRoutingModule
  ],
  declarations: [SeatedbbcalfPage]
})
export class SeatedbbcalfPageModule {}
