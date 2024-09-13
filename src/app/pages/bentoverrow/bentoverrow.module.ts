import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BentoverrowPageRoutingModule } from './bentoverrow-routing.module';

import { BentoverrowPage } from './bentoverrow.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BentoverrowPageRoutingModule
  ],
  declarations: [BentoverrowPage]
})
export class BentoverrowPageModule {}
