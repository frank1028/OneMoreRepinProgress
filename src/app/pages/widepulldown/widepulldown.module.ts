import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WidepulldownPageRoutingModule } from './widepulldown-routing.module';

import { WidepulldownPage } from './widepulldown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidepulldownPageRoutingModule
  ],
  declarations: [WidepulldownPage]
})
export class WidepulldownPageModule {}
