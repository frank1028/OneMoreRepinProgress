import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TricepspushdownhistPageRoutingModule } from './tricepspushdownhist-routing.module';

import { TricepspushdownhistPage } from './tricepspushdownhist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TricepspushdownhistPageRoutingModule
  ],
  declarations: [TricepspushdownhistPage]
})
export class TricepspushdownhistPageModule {}
