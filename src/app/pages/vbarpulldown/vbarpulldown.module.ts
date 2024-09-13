import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VbarpulldownPageRoutingModule } from './vbarpulldown-routing.module';

import { VbarpulldownPage } from './vbarpulldown.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VbarpulldownPageRoutingModule
  ],
  declarations: [VbarpulldownPage]
})
export class VbarpulldownPageModule {}
