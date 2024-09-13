import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VbarpulldownhistPageRoutingModule } from './vbarpulldownhist-routing.module';

import { VbarpulldownhistPage } from './vbarpulldownhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VbarpulldownhistPageRoutingModule
  ],
  declarations: [VbarpulldownhistPage]
})
export class VbarpulldownhistPageModule {}
