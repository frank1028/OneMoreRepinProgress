import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidepulldownhistPageRoutingModule } from './widepulldownhist-routing.module';

import { WidepulldownhistPage } from './widepulldownhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidepulldownhistPageRoutingModule
  ],
  declarations: [WidepulldownhistPage]
})
export class WidepulldownhistPageModule {}
